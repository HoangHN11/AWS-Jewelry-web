import React from 'react'

const categories = ['Ring','Necklace','Earrings','Bracelet']
const materials = ['Gold 18K','Gold 24K','Silver','Diamond']

export default function FilterSidebar({filters, setFilters}){
  function toggleArray(key, value){
    setFilters(prev=>{
      const set = new Set(prev[key])
      if(set.has(value)) set.delete(value)
      else set.add(value)
      return {...prev, [key]: new Set(set)}
    })
  }

  function setPrice(range){
    setFilters(prev=> ({...prev, priceRange: range}))
  }

  return (
    <aside className="space-y-6">
      <div>
        <h4 className="font-semibold mb-2">Loại</h4>
        <div className="space-y-1">
          {categories.map(c=> (
            <label key={c} className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={filters.category.has(c)} onChange={()=>toggleArray('category',c)} />
              {c}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Chất liệu</h4>
        <div className="space-y-1">
          {materials.map(m=> (
            <label key={m} className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={filters.material.has(m)} onChange={()=>toggleArray('material',m)} />
              {m}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Giá</h4>
        <div className="space-y-1 text-sm">
          <label className="flex items-center gap-2"><input type="radio" name="price" checked={filters.priceRange==='<5'} onChange={()=>setPrice('<5')} /> &lt; 5 triệu</label>
          <label className="flex items-center gap-2"><input type="radio" name="price" checked={filters.priceRange==='5-10'} onChange={()=>setPrice('5-10')} /> 5–10 triệu</label>
          <label className="flex items-center gap-2"><input type="radio" name="price" checked={filters.priceRange==='>10'} onChange={()=>setPrice('>10')} /> &gt;10 triệu</label>
          <label className="flex items-center gap-2"><input type="radio" name="price" checked={filters.priceRange==='' } onChange={()=>setPrice('')} /> Tất cả</label>
        </div>
      </div>

      <div>
        <button className="px-4 py-2 bg-gold text-white rounded" onClick={()=>setFilters({category: new Set(), material: new Set(), priceRange: ''})}>Reset</button>
      </div>
    </aside>
  )
}

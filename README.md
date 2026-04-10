Írj filterAvailableProducts (products, minPrice, category) függvényt.

products bemeneti tömbre példe:
[
  { name: 'Laptop', price: 320000, category: 'tech', available: true},
  { name: 'Egér', price: 8000, category: 'tech', available: false},
  { name: 'Szék', price: 45000, category: 'home', available: true}
]

Elvárás:
- csak az available: true elemek maradjanak
- csak a minPrice feletti vagy egyenlő árú elemek maradjanak
- csak a megadott kategória maradjon
- név szerint rendezze őket
- ne módosítsa az eredeti tömböt

Írj tesztet is rá!

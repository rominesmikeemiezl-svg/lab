 const cities=[
 {name:"Metroville",pop:1200000,area:500,reg:"North"},
 {name:"Rivertown",pop:800000,area:350,reg:"South"},
 {name:"Hilltop",pop:450000,area:200,reg:"East"},
 {name:"Baycity",pop:2000000,area:700,reg:"North"}
];

// 1. Average population
const avgPop=c=>c.reduce((a,x)=>a+x.pop,0)/c.length;

// 2. Filter by region
const filterReg=(c,r)=>c.filter(x=>x.reg===r);

// 3. Largest by area
const largestArea=c=>c.reduce((a,x)=>x.area>a.area?x:a);

// 4. Group by population
const groupPop=c=>({
 Small:c.filter(x=>x.pop<500000),
 Medium:c.filter(x=>x.pop>=500000&&x.pop<=1000000),
 Large:c.filter(x=>x.pop>1000000)
});

// 5. Simulate async fetch
const fetchCity=()=>new Promise(r=>
  setTimeout(()=>r({name:"Lakeside",pop:600000,area:400,reg:"West"}),500)
);

// Example
console.log("Avg Pop:",avgPop(cities));
console.log("North Cities:",filterReg(cities,"North"));
console.log("Largest Area:",largestArea(cities));
console.log("Grouped:",groupPop(cities));
fetchCity().then(x=>console.log("Fetched:",x));
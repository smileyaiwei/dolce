function o(n){for(let r=n.entries.length-1;r>=0;r--){const e=n.entries[r];if(e.kind==="chord")return e.position.plus(e.duration)}throw new Error("measure has no chord")}export{o as measureDuration};

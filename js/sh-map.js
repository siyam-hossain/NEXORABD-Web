
(function () {
  const dataSet = {
    USA: { active:{value:'392',percent:'0.9',isGrown:true}, new:{value:'1,408',percent:'2.2',isGrown:true}, fillKey:'USA', short:'us', customName:'United States' },
    BGD: { active:{value:'2,210',percent:'6.5',isGrown:true}, new:{value:'510',percent:'3.4',isGrown:false}, fillKey:'BD', short:'bd', customName:'Bangladesh' },
    IND: { active:{value:'1,408',percent:'19.2',isGrown:true}, new:{value:'392',percent:'11.1',isGrown:true}, fillKey:'IND', short:'in' },
    CHN: { active:{value:'10,101',percent:'13.7',isGrown:true}, new:{value:'509',percent:'0.1',isGrown:false}, fillKey:'CHN', short:'cn' },
    BRA: { active:{value:'5,101',percent:'42.2',isGrown:false}, new:{value:'444',percent:'41.2',isGrown:false}, fillKey:'BRA', short:'br' },
    DEU: { active:{value:'8,408',percent:'5.4',isGrown:false}, new:{value:'1001',percent:'5.1',isGrown:true}, fillKey:'DEU', short:'de' },
    GBR: { active:{value:'4,889',percent:'9.1',isGrown:false}, new:{value:'2,001',percent:'3.2',isGrown:true}, fillKey:'GBR', short:'gb' },
    CAN: { active:{value:'1,890',percent:'4.2',isGrown:true}, new:{value:'320',percent:'2.1',isGrown:false}, fillKey:'CAN', short:'ca', customName:'Canada' },
    AUS: { active:{value:'980',percent:'2.5',isGrown:false}, new:{value:'200',percent:'1.5',isGrown:true}, fillKey:'AUS', short:'au', customName:'Australia' },
    RUS: { active:{value:'7,550',percent:'6.8',isGrown:true}, new:{value:'1,050',percent:'5.0',isGrown:false}, fillKey:'RUS', short:'ru', customName:'Russia' },
    JPN: { active:{value:'6,200',percent:'8.0',isGrown:false}, new:{value:'890',percent:'4.1',isGrown:true}, fillKey:'JPN', short:'jp', customName:'Japan' },
    FRA: { active:{value:'5,000',percent:'7.5',isGrown:true}, new:{value:'700',percent:'3.1',isGrown:false}, fillKey:'FRA', short:'fr', customName:'France' },
    ITA: { active:{value:'4,200',percent:'6.8',isGrown:false}, new:{value:'500',percent:'2.7',isGrown:true}, fillKey:'ITA', short:'it', customName:'Italy' },
    ESP: { active:{value:'3,600',percent:'5.9',isGrown:true}, new:{value:'420',percent:'2.3',isGrown:true}, fillKey:'ESP', short:'es', customName:'Spain' },
    MEX: { active:{value:'2,900',percent:'4.8',isGrown:true}, new:{value:'350',percent:'1.8',isGrown:false}, fillKey:'MEX', short:'mx', customName:'Mexico' },
    ZAF: { active:{value:'1,700',percent:'3.6',isGrown:true}, new:{value:'210',percent:'1.5',isGrown:true}, fillKey:'ZAF', short:'za', customName:'South Africa' },
    NGA: { active:{value:'2,100',percent:'4.0',isGrown:false}, new:{value:'300',percent:'1.9',isGrown:true}, fillKey:'NGA', short:'ng', customName:'Nigeria' },
    KOR: { active:{value:'2,800',percent:'6.0',isGrown:true}, new:{value:'400',percent:'2.5',isGrown:false}, fillKey:'KOR', short:'kr', customName:'South Korea' },
    TUR: { active:{value:'3,400',percent:'5.3',isGrown:true}, new:{value:'450',percent:'2.2',isGrown:true}, fillKey:'TUR', short:'tr', customName:'Turkey' },
    ARG: { active:{value:'1,500',percent:'2.9',isGrown:false}, new:{value:'180',percent:'1.2',isGrown:true}, fillKey:'ARG', short:'ar', customName:'Argentina' }
  };

  const dataMap = new Datamap({
    element: document.querySelector('#hs-users-datamap'),
    projection: 'mercator',
    responsive: true,
    fills: {
      defaultFill: '#374151',
      USA: '#3b82f6', // blue-600
      BGD: '#22c55e', // green-500
      IND: '#e11d48', // rose-600
      CHN: '#f97316', // orange-500
      BRA: '#84cc16', // lime-500
      DEU: '#a855f7', // purple-500
      GBR: '#06b6d4', // cyan-500
      CAN: '#f59e0b', // amber-500
      AUS: '#ec4899', // pink-500
      RUS: '#9333ea', // violet-600
      JPN: '#ef4444', // red-500
      FRA: '#14b8a6', // teal-500
      ITA: '#8b5cf6', // indigo-500
      ESP: '#fb923c', // orange-400
      MEX: '#10b981', // emerald-500
      ZAF: '#f43f5e', // rose-500
      NGA: '#0ea5e9', // sky-500
      KOR: '#c026d3', // fuchsia-600
      TUR: '#22d3ee', // cyan-400
      ARG: '#fde047'  // yellow-300
    },
    data: dataSet,
    geographyConfig: {
      borderColor: '#181818',
      highlightFillColor: '#facc15',
      highlightBorderColor: '#facc15',
      popupTemplate: function (geo, data) {
        if (!data) return `<div class="popup-box">No data for ${geo.properties.name}</div>`;
        const growUp = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-teal-400"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`;
        const growDown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-red-400"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>`;
        return `
          <div class="popup-box">
            <div style="display:flex; align-items:center; margin-bottom:4px;">
              <div style="width:20px;height:15px;background:url('https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/${data.short}.svg') no-repeat center/cover;margin-right:6px;"></div>
              <span style="font-weight:600;">${data.customName || geo.properties.name}</span>
            </div>
            <div style="display:flex;align-items:center;gap:4px;">
              <span>Active:</span>
              <span style="font-weight:500;">${data.active.value}</span>
              <span style="color:${data.active.isGrown ? '#14b8a6' : '#f87171'};">${data.active.percent}%</span>
              ${data.active.isGrown ? growUp : growDown}
            </div>
            <div style="display:flex;align-items:center;gap:4px;">
              <span>New:</span>
              <span style="font-weight:500;">${data.new.value}</span>
              <span style="color:${data.new.isGrown ? '#14b8a6' : '#f87171'};">${data.new.percent}%</span>
              ${data.new.isGrown ? growUp : growDown}
            </div>
          </div>`;
      }
    }
  });

  window.addEventListener('resize', function () {
    dataMap.resize();
  });
})();


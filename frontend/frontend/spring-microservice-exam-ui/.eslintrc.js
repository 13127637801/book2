module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}


switch(record.areaType) {
     case 'area_type_tank':
        this.riskArea.AreaType = '储罐区'
        break;
     case 'area_type_emgency':
        this.riskArea.AreaType = '应急疏散场地'
        break;
     case 'area_type_resource':
        this.riskArea.AreaType = '应急资源存放点'

        break;
     case 'area_type_pump':
        this.riskArea.AreaType = '泵区'
        break;
     case 'area_type_fire':
        this.riskArea.AreaType = '动火区域'
        break;
     case 'area_type_waste':
        this.riskArea.AreaType = '固废堆场'
        break;
     case 'area_type_shed':
         this.riskArea.AreaType = '棚区'
        break;
     case 'area_type_dock':
        this.riskArea.AreaType = '装卸区'
        break;
    case 'area_type_frame':
        this.riskArea.AreaType = '框架放置区'
        break;
    case 'area_type_slot':
        this.riskArea.AreaType = '槽区'
        break; 
    case 'area_type_tower':
        this.riskArea.AreaType = '塔区'
        break;                           
     default:
        this.riskArea.AreaType = null;
} 
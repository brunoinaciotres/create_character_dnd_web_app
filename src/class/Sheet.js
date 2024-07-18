export default class Sheet {
    constructor({
        raceSelected=null, 
        classSelected=null, 
        backgroundSelected=null,
        attributesValuesMethod=null
    }){
        this.raceSelected = raceSelected,
        this.classSelected = classSelected,
        this.backgroundSelected = backgroundSelected,
        this.attributesValuesMethod = attributesValuesMethod
    }

    setRace(race){
        this.raceSelected = race
    }

    setClass(aClass){
        this.classSelected = aClass
    }

    setBackground (background) {
        this.backgroundSelected = background
    }
    
}
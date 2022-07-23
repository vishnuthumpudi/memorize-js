function createGetData(){
    let isCached = false;
    let cachedValue = null;
    
    return function(){
        if (isCached){
            console.log('Returning from cache');
            return cachedValue;
        }
        
        console.log('Computing Value.....')
        
        result = 123;
        
        cachedValue = result;
        isCached = true;
        
        return result;
    }
}

const getData = createGetData()

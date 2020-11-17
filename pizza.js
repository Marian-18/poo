class pizza {
    constructor(masa, tamano, ingredientes){
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;
    }

    preparar(){ console.log('preparando pizza ${this.tamano}, ${this.masa}, ingredientes: ${this.ingredientes}');
    return this;
}

hornear(){
    console.log('la pizza esta en el horno');
    return this;
}

empacar(){
    console.log('empacando pizza...');
    console.log('pizza lista para ser emviada');
    return this;
}
}
const pizzaPolloChampinones = new Pizza ('Pizza delgada', 'grande', ['Queso', 'Pollo', 'Champiñones']);
console.log(pizzaPolloChampinones.preparar());
console.log(pizzaPolloChampinones.hornear());
console.log(pizzaPolloChampinones.empacar());
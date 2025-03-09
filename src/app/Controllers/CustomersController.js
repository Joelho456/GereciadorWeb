let customers = [
    { id: 1, name: "Dev Samurai", site: "https://www.linkedin.com/in/carlos-renan-9abbb4294/r" },
    { id: 2, name: "Google", site: "http://google.com" },
    { id: 3, name: "UOL", site: "http://uol.com.br" }
];

class CustomerController {

    // Listagem dos Customers
    index(req, res) {
        return res.json(customers);
    }

    // Recupera um Customer
    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customer ? 200 : 404;

        console.debug(" GET :: /custormers/:id ", JSON.stringify(customer));

        return res.status(status).json(customer);
    }

    // Cria um novo Customer
    create(req, res) {
        const { name, site } = req.body;
        const id = customers[customers.length - 1].id + 1;

        const newCustomer = { id, name, site };
        customers.push(newCustomer);

        console.debug(" POST :: /custormers ", customers);

        return res.status(201).json(newCustomer);
    }

    // Atualiza um Customer
    update(req, res) {
        const id = parseInt(req.params.id);
        const { name, site } = req.body;

        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if(index >= 0) {
            customers[index] = { id: parseInt(id), name, site };
        } 

        console.debug("  PUT :: /customers/:id ", customers);
        
        return res.status(status).json(customers[index]);
    }

    // Exclui um Customer
    destroy(req, res){
        const id = parseInt(req.params.id);

        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0){
            customers.splice(index, 1); // O splice indica que vou remover um objeto numa posicao expecifica
        }

        console.debug(" DELETE :: /customers/:id ", customers);

        return res.status(status).json();
    }
}

export default new CustomerController();
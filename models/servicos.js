const fs = require('fs');
const {v4: geradorDeId } = require('uuid')

function open () {
    let content = fs.readFileSync("./db.json", "utf8")
    const db = JSON.parse(content)
    return db
}

function store (db) {
    content = JSON.stringify(db)
    fs.writeFileSync("./db.json", content, "utf8")
}

const Servico = {
    findAll: () => {
        const db = open()
        return db.servicos
    },

    findById: (id) => {
        const db = open()
        const servicos = db.servicos.find(servicos => servicos.id === id)
        return servicos
    },

    save: (servicos) => {
        const db = open()
        servicos.id = geradorDeId()
        db.servicos.push(servicos)
        store(db)
    },

    update: (id, servicosAtualizado) => {
        const db = open()
        const index = db.servicos.findIndex(servico => servico.id === id)
        db.servicos[index] = servicosAtualizado
        store(db)
    },

    delete: (id) => {
        const db = open()
        const index = db.servicos.findIndex(servico => servico.id === id)
        db.servicos.splice(index, 1)
        store(db)
    }
}
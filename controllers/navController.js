const navController = {
    
    index: (req, res ) => {
        res.render('index.ejs')
    },

    cadastro: (req, res ) => {
        res.render('cadastro')
    },

    contato: (req, res ) => {
        res.render('contato')
    },

    login: (req, res ) => {
        res.render('login')
    },

    servicos: (req, res ) => {
        res.render('servicos')
    },
    
    sobre: (req, res ) => {
        res.render('sobre')
    },

}


module.exports = navController
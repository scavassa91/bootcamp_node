module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Bootcamp API - porta ${app.get("port")}`);    
    });
};
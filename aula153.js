const configdgv = {
    endpoind: "produtos.json"
}
const dgv = (configdgv) => {
    fetch(configdgv.endpoind)
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })

}
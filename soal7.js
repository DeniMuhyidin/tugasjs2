const person = [`zhanpar`, `Zhanpar`, `Zanpar`, `janpar`, `Zhanpar`, `zhampar`]
function filname() {
    const filter = person.filter(el => {
        return el == `Zhanpar`
    })
    console.log(filter);
}
filname()
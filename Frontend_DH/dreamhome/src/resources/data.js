function Func() {
    fetch("./train.json")
        .then((res) => {
        return res.json();
    })
    .then((data) => print(data));
}
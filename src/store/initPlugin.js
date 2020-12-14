// function init(store) {
//     const reader = new FileReader()
//     reader.addEventListener('load', function() {
//         console.log(reader.result)
//         store.state.images.push(reader.result)
//     }, false)
    
//     for(let i = 1; i < 9; i++) {
//         let url = './images/image'+i+'.jpg'
//         fetch(url)
//         .then(response => response.blob())
//         .then(data => reader.readAsDataURL(data))
//     }
// }

export default store => {
    
}
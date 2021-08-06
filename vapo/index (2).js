image_array = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
]

function get_random_image(){

    random_index = Math.floor(Math.random() * image_array.length);

    selected_image = image_array [random_index]

    document.getElementById('image_shower').src = `./images/${selected_image}`
}
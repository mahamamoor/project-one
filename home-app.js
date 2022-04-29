// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};

// Make a constant to access the name function
// Toggles between showing and hiding screen 1 and screen 2
const changeName = () => {
  const $name1 = $('.name-1')
  $name1.toggle()

	const $name2 = $('.name-2')
  $name2.toggle()
}

$(() => {
  const $name = $('#name')
  $name.hover(changeName)
})

// const $div = $('<div>').attr('id', 'nav-placeholder').addTo('body')
//
// $(() => {
//   $("#nav-placeholder").load("home.html .container");
// });

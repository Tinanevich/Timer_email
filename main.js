const form = document.getElementById('form')
const btn = document.getElementById('form-button')
const popup = document.getElementById('popup')
const close_popup = document.getElementById('close-popup')
const close_popup2 = document.getElementById('close-popup2')
const inputField = document.getElementById('input-field')


form.addEventListener('submit', onSubmit)

close_popup.addEventListener('click', () => { popup.style.display = "none" })
close_popup2.addEventListener('click', () => { popup.style.display = "none" })

async function onSubmit (event) {
  event.preventDefault() // чтобы страница не перезагружалась при клике

  if (!inputField.value.length) return

  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts',  {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
      }
    })

    if (result.ok) {
        popup.style.display = "block";
    }

  } catch (e) {
    console.log('error try to post data :', e)
  }
}
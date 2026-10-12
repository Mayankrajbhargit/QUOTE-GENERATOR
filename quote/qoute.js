// var
let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote: `"Arise, awake, and stop not till the goal is reached."`,
    person: `Swami Vivekananda`},
{
    quote: `"The mind is everything. What you think, you become.
    " (Commonly attributed, though its origin in the early texts is debated.)"`,
    person: `Buddha`},
{
    quote: `"You have a right to perform your duty, but not to the fruits of your actions."`,
    person: `Shree Krishna`},
{
    quote: `"Love your neighbor as yourself."`,
    person: `Jesus Christ`},
{
    quote: `"The best among you are those who have the best manners and character."`,
    person: `Prophet Muhammad`},
{
    quote: `"Dreams are not what you see in sleep, but what does not let you sleep."`,
    person: `APJ Abdul Kalam`},
{
    quote: `"Imagination is more important than knowledge."`,
    person: `Albert Einstien`},
{
    quote: `"Give me blood, and I will give you freedom!"`,
    person: `Subhas Chandra Bose`},
{
    quote: `"Truth is high, but higher still is truthful living."`,
    person: `Guru Nanak`},
{
    quote: `"They may kill me, but they cannot kill my ideas. 
    They can crush my body, but they will not be able to crush my spirit."`,
    person: `Bhagat Singh`
},];
btn.addEventListener('click', function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})

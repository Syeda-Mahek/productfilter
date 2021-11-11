let indicator = document.querySelector('.indicator').children;
let main = document.querySelector('.items').children;

for(let i=0; i<indicator.lenght; i++)
{
    indicator[i].onclick = function(){
        for(let x=0; x<indicator.lenght; x++)
        {
            indicator[x].classList.remove('active');
        }
        this.classList.add('active');
     const displayItems = this.getAttribute('data-filter');
     for(let z=0; z<indicator.lenght; z++)
{
    main[z].style.transform = 'scale(0)';
    setTimeout(() => {
        main[z].style.display = 'none';
    }, 500);

    if((main[z].getAttribute('data-category') == displayItems) || displayItems == 'all')
    {
        main[z].style.transform = 'scale(1)';
    setTimeout(() => {
        main[z].style.display = 'block';
    }, 500); 
    }
}     
    }    
}

  main color : #FF9800

 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum



 
.main .text .heading{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 40px;
    padding: 10px 40px;
    position: relative;
}
.main .heading::before{
    content: "";
    position: absolute;
    background: var(--primary-color);
    width: 100px;
    height: 4px;
    bottom: 0px;
}

.about{
    width: inherit;
    height: 680px;
    background: #f4f4f4;
   
    display: flex;
    justify-content: space-between;
}
.about img{
    margin: 20px;
}
.about .text{
    padding: 20px;
}
.about p{
    font-family: 'Raleway';
    font-weight: 500;
    line-height: 30px;
    color: #777;
    font-size: 18px;
    padding: 20px;
}
.about ul{
    display: flex;
    justify-content: space-evenly;
    margin: 25px;
}
.about ul li{
    list-style: none;
    text-align: center;
}
.about ul li h1{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 40px;
}
.about ul li p{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    color: #777;
}
.about .btn{
    background: var(--primary-color);
    color: #fff;
    text-decoration: none;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 20px;
    padding: 15px 40px;
    margin: 20px;
    border-radius: 30px;
}


.services{
    width: 100%;
    height: 740px;
    background: #f4f4f4;
    padding:0px 5%;
}
.services .list , .work .list{
    width: 100%;
    height: auto;
    padding: 40px 0px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.services .list .box , .work .list .box{
    width: 400px;
    height: 275px;
    margin: 20px;
    position: relative;
    overflow: hidden;
    transition: transform 1s all;
    flex-shrink: 0;
}
.services .list .box img{
    width: inherit;
    height: inherit;
    filter: grayscale(1);
    transition: .5s all;
}
.services .list .box p{
    width: inherit;
    height: inherit;
    background: rgba(0,0,0,0.5);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-family: 'Raleway';
    font-weight: 800;
    position: absolute;
    top: 0;
    left: 0px;
    transition: .5s all;
}

.services .list .box:hover > img{
    filter: grayscale(0);
    transform: scale(1.1);
}
.services .list .box:hover > p{
    width: 0;
    opacity: 0;
    overflow: hidden;
}
.work{
    padding: 5%;
    width: 100%;
    height: auto;
    background: #f4f4f4;
}
.work .box img{
    transition: .5s all;
}
.work .box:hover > img{
    transform: scale(1.1);
}

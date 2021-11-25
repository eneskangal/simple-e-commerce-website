import React, { Component } from 'react';
import ET from "./images/Erkek/erkek-tshirt.jpg"
import EK from "./images/Erkek/erkek-kot.jpg"
import EM from "./images/Erkek/erkek-mont.jpg"
import EI from "./images/Erkek/erkek-ic.jpg"
import KT from "./images/Kadın/kadın-tshirt.jpg"
import KK from "./images/Kadın/kadın-kot.jpg"
import KM from "./images/Kadın/kadın-mont.jpg"
import KI from "./images/Kadın/kadın-ic.jpg"
import "./app.css"
class Content extends Component {           
    render(){                     
        let array=[]
        function aysıralama(e){            
            e.map(t =>array.push(t.price))
            let i;
            let t,f;       
            f=0;
            while(f==0){f=1;
                for(i=0;i<=array.length-1;i++)
                {
                    if(array[i]>array[i+1])
                    {
                        t=array[i];
                        array[i]=array[i+1];
                        array[i+1]=t;
                        f=0;
                    }
                }
            }
            let k=0
            let j=0                                             
            let bikinilist =[]           
            while(k<array.length){                              
                if(e[j].price==array[k]){
                    bikinilist.push(e[j])                                        
                    if(k+1==array.length){
                        return bikinilist.map(t =><div className="content-box">
                            <div className="card">
                                <div className="card-img-top">
                                    <img  alt={t.alt} key={t.id} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-h5">{t.price}</h5>
                                </div>
                            </div>
                        </div>)  
                    }
                    else{
                        k++
                        j=0
                    }                                                                              
                }
                else{
                    j++
                }
            }                                                                                            
        }
        let dizi=[]
        function yasıralama(e){            
            e.map(t =>dizi.push(t.price))
            let i;
            let t,f;       
            f=0;
            while(f==0){f=1;
                for(i=0;i<=dizi.length-1;i++)
                {
                    if(dizi[i]>dizi[i+1])
                    {
                        t=dizi[i];
                        dizi[i]=dizi[i+1];
                        dizi[i+1]=t;
                        f=0;
                    }
                }
            }
            dizi=dizi.reverse()
            let k=0
            let j=0                                             
            let bikinilist=[]           
            while(k<dizi.length){                              
                if(e[j].price==dizi[k]){
                    bikinilist.push(e[j])                                        
                    if(k+1==dizi.length){
                        return bikinilist.map(t =><div className="content-box">
                            <div className="card">
                                <div className="card-img-top">
                                    <img  alt={t.alt} key={t.id} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-h5">{t.price}</h5>
                                </div>
                            </div>
                        </div>)  
                    }
                    else{
                        k++
                        j=0
                    }                                                                              
                }
                else{
                    j++
                }
            }                                                                                            
        }                                
        let Images={
            "erkek":[{
                id:1,
                srcUrl:"./images/Erkek/erkek-tshirt.jpg",
                alt:"erkek t-shirt",
                price:20
            },{
                id:2,
                srcUrl:"./images/Erkek/erkek-kot.jpg",
                alt:"erkek kot",
                price:50
            },
            {
                id:3,
                srcUrl:"./images/Erkek/erkek-mont.jpg",
                alt:"erkek mont",
                price:100
            },{
                id:4,
                srcUrl:"./images/Erkek/erkek-ic.jpg",
                alt:"erkek ic camasırı",
                price:5
            }
            ],
            "kadın":[{
                id:1,
                srcUrl:"./images/Kadın/kadın-tshirt.jpg",
                alt:"kadın t-shirt",
                price:20
            },{
                id:2,
                srcUrl:"./images/Kadın/kadın-kot.jpg",
                alt:"kadın kot",
                price:50
            },
            {
                id:3,
                srcUrl:"./images/Kadın/kadın-mont.jpg",
                alt:"kadın mont",
                price:100
            },{
                id:4,
                srcUrl:"./images/Kadın/kadın-ic.jpg",
                alt:"kadın ic",
                price:5
            }
            ],
            "erkektshirt":[{
                id:1,
                srcUrl:"./images/Erkek/erkek-tshirt.jpg",
                alt:"erkek-tshirt",
                price:20
            }
            ],
            "erkekkot":[{
                id:1,
                srcUrl:"./images/Erkek/erkek-kot.jpg",
                alt:"erkek kot",
                price:50
            }                
            ],
            "erkekmont":[{
                id:1,
                srcUrl:"./images/Erkek/erkek-mont.jpg",
                alt:"erkek mont",
                price:100
            }                
            ],
            "erkekic":[
                {
                    id:1,
                    srcUrl:"./images/Erkek/erkek-ıc.jpg",
                    alt:"erkek ic",
                    price:5

                }                
            ],
            "kadıntshirt":[
                {
                    id:1,
                    srcUrl:"./images/Kadın/kadın-tshirt.jpg",
                    alt:"kadın t-shirt",
                    price:20
                }
            ],
            "kadınkot":[
                {
                    id:1,
                    srcUrl:"./images/Kadın/kadın-kot.jpg",
                    alt:"kadın kot",
                    price:50
                }                
            ],
            "kadınmont":[
                {
                    id:1,
                    srcUrl:"./images/Kadın/kadın-mont.jpg",
                    alt:"kadın mont",
                    price:100
                },
                {
                    id:2,
                    srcUrl:"./images/Kadın/kadın-mont.jpg",
                    alt:"kadın mont2",
                    price:200
                }                 
            ],
            "kadınic":[
                {
                    id:1,
                    srcUrl:"./images/Kadın/kadın-ic.jpg",
                    alt:"kadın ic",
                    price:25
                },
                {
                    id:2,
                    srcUrl:"./images/Kadın/kadın-ic.jpg",
                    alt:"kadın ic2",
                    price:5
                },                
            ],             
        }      
        return(          
            <div>
                {
                    this.props.cinsiyet!="cinsiyet secin" ?(
                        this.props.cinsiyet=="Erkek" ?(
                            this.props.tur=="turu secın" ?(                               
                                <div>
                                    <h1>{this.props.cinsiyet+"/"+this.props.tur}</h1>
                                    <div>
                                    {
                                        this.props.sıralama=="secin" ?(
                                            <div>
                                                {
                                                    Images.erkek.map(t =><div className="content-box">
                                                        <div className="card">
                                                            <div className="card-img-top">
                                                                <img src={ET} alt={t.alt} key={t.id}/>
                                                            </div>
                                                            <div className="card-body">
                                                                <h5 className="card-h5">{t.price}</h5>
                                                            </div>
                                                        </div>
                                                    </div>) 
                                                }
                                            </div>
                                        ):this.props.sıralama=="Azalanda Yuksege"?(
                                            aysıralama(Images.erkek)
                                        ):  yasıralama(Images.erkek)
                                    }                                                                                   
                                    </div>                                                                                                                                                                                                      
                                </div>                                                                
                            ):this.props.tur=="T-shirt" ?(
                                <div>
                                    <h1>{this.props.cinsiyet+"/"+this.props.tur}</h1>
                                    {
                                        this.props.sıralama=="secin" ?(
                                            <div>
                                                {
                                                    Images.erkektshirt.map(t =><div className="content-box">
                                                        <div className="card">
                                                            <div className="card-img-top">
                                                                <img src={ET} alt={t.alt} key={t.id}/>
                                                            </div>
                                                            <div className="card-body">
                                                                <h5 className="card-h5">{t.price}</h5>
                                                            </div>
                                                        </div>
                                                    </div>) 
                                                }
                                            </div>
                                        ):this.props.sıralama=="Azalanda Yuksege"?(
                                            aysıralama(Images.erkektshirt)
                                        ):  yasıralama(Images.erkektshirt)
                                    }                                              
                                </div>                                                              
                            ):this.props.tur=="Kot" ?(
                                <div>
                                    <h1>{this.props.cinsiyet+"/"+this.props.tur}</h1>
                                   {
                                    this.props.sıralama=="secin" ?(
                                        <div>
                                            {
                                                Images.erkekkot.map(t =><div className="content-box">
                                                    <div className="card">
                                                        <div className="card-img-top">
                                                            <img src={EK} alt={t.alt} key={t.id}/>
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className="card-h5">{t.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>) 
                                            }
                                        </div>
                                    ):this.props.sıralama=="Azalanda Yuksege"?(
                                        aysıralama(Images.erkekkot)
                                    ):  yasıralama(Images.erkekkot)
                                    }                                                               
                                </div>                                 
                            ):this.props.tur=="Mont" ?(
                                <div>
                                    <h1>{this.props.cinsiyet+"/"+this.props.tur}</h1>
                                    {
                                    this.props.sıralama=="secin" ?(
                                        <div>
                                            {
                                                Images.erkekmont.map(t =><div className="content-box">
                                                    <div className="card">
                                                        <div className="card-img-top">
                                                            <img src={EM} alt={t.alt} key={t.id}/>
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className="card-h5">{t.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>) 
                                            }
                                        </div>
                                    ):this.props.sıralama=="Azalanda Yuksege"?(
                                        aysıralama(Images.erkekmont)
                                    ):  yasıralama(Images.erkekmont)
                                }                                                                                                        
                                </div>                                                             
                            ):
                            <div>
                                <h1>{this.props.cinsiyet+"/"+this.props.tur}</h1>
                                {
                                    this.props.sıralama=="secin" ?(
                                        <div>
                                            {
                                                Images.erkekic.map(t =><div className="content-box">
                                                    <div className="card">
                                                        <div className="card-img-top">
                                                            <img src={EI} alt={t.alt} key={t.id}/>
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className="card-h5">{t.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>) 
                                            }
                                        </div>
                                    ):this.props.sıralama=="Azalanda Yuksege"?(
                                        aysıralama(Images.erkekic)
                                    ):  yasıralama(Images.erkekic)
                                }                                              
                            </div>                                                                            
                        ):
                        this.props.tur=="turu secın" ?(
                            <div>
                                <h1>{this.props.cinsiyet+"/"+this.props.tur}</h1>
                                {
                                    this.props.sıralama=="secin" ?(
                                        <div>
                                            {
                                                Images.kadın.map(t =><div className="content-box">
                                                    <div className="card">
                                                        <div className="card-img-top">
                                                            <img src={KT} alt={t.alt} key={t.id}/>
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className="card-h5">{t.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>) 
                                            }
                                        </div>
                                    ):this.props.sıralama=="Azalanda Yuksege"?(
                                        aysıralama(Images.kadın)
                                    ):  yasıralama(Images.kadın)
                                }                                                                                                                                                                                                       
                            </div>                                                                                        
                        ):this.props.tur=="T-shirt" ?(
                            <div>
                                <h1>{this.props.cinsiyet+"/"+this.props.tur}</h1>
                                {
                                    this.props.sıralama=="secin" ?(
                                        <div>
                                            {
                                                Images.kadıntshirt.map(t =><div className="content-box">
                                                    <div className="card">
                                                        <div className="card-img-top">
                                                            <img src={KT} alt={t.alt} key={t.id}/>
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className="card-h5">{t.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>) 
                                            }
                                        </div>
                                    ):this.props.sıralama=="Azalanda Yuksege"?(
                                        aysıralama(Images.kadıntshirt)
                                    ):  yasıralama(Images.kadıntshirt)
                                }                                 
                            </div>                               
                        ):this.props.tur=="Kot" ?(
                            <div>
                                <h1>{this.props.cinsiyet+"/"+this.props.tur}</h1>                           
                                {
                                    this.props.sıralama=="secin" ?(
                                        <div>
                                            {
                                                Images.kadınkot.map(t =><div className="content-box">
                                                    <div className="card">
                                                        <div className="card-img-top">
                                                            <img src={KK} alt={t.alt} key={t.id}/>
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className="card-h5">{t.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>) 
                                            }
                                        </div>
                                    ):this.props.sıralama=="Azalanda Yuksege"?(
                                        aysıralama(Images.kadınkot)
                                    ):  yasıralama(Images.kadınkot)
                                } 
                            </div>                                                     
                        ):this.props.tur=="Mont" ?(
                            <div>
                                <h1>{this.props.cinsiyet+"/"+this.props.tur}</h1>
                                {
                                    this.props.sıralama=="secin" ?(
                                        <div>
                                            {
                                                Images.kadınmont.map(t =><div className="content-box">
                                                    <div className="card">
                                                        <div className="card-img-top">
                                                            <img src={KM} alt={t.alt} key={t.id}/>
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className="card-h5">{t.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>) 
                                            }
                                        </div>
                                    ):this.props.sıralama=="Azalanda Yuksege"?(
                                        aysıralama(Images.kadınmont)
                                    ):  yasıralama(Images.kadınmont)
                                }                                                          
                            </div>                                                 
                        ):
                        <div>
                            <h1>{this.props.cinsiyet+"/"+this.props.tur}</h1>
                            {                                
                                this.props.sıralama=="secin" ?(
                                    <div>
                                        {
                                            Images.kadınic.map(t =><div className="content-box">
                                                <div className="card">
                                                    <div className="card-img-top">
                                                        <img src={KI} alt={t.alt} key={t.id}/>
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-h5">{t.price}</h5>
                                                    </div>
                                                </div>
                                            </div>)                                                
                                        }                                          
                                    </div>
                                ):this.props.sıralama=="Azalanda Yuksege" ?(
                                    aysıralama(Images.kadınic)
                                ):  yasıralama(Images.kadınic)                                                         
                            }                      
                       </div>                                                                                                                                            
                    ): null
                }                                                                          
            </div>
        );
    }
}

export default Content;
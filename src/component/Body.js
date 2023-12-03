import React, { useState } from 'react';

const Body = () => {
    const list=[{
        con:false,
        question:"If there are multiple recycle bin for a hard disk",
        options:[
           "You can set different size for each recycle bin",
           "you can choose which recycle bin to use to store your deleted files",
          "you can make any one of them default recycle bin",
           "None of above"
        ],
        answer:1,
    },
{
    con:false,
question:"_______ is the smallest unit of data in a computer ?",
options:[
    "Gigabyte ",
    "Bit",
    "Byte",
    "Terabyte"
    ],
answer:2
},
{
    con:false,
    question:"Which of the following is NOT an anti-virus software ?",
    options:[
        "Avast",
        "Linux ",
        "Norton ",
        "Kaspersky "
    ],
    answer:2
    },
    {
        con:false,
        question:"In the context of digital computer, which of the following pairs of digits is referred to as binary code ?",
        options:{
            a:"3 and 4 ",
            b:"0 and 1",
            c:"2 and 3 ",
            d:"1 and 2"
        },
        answer:2
        },
        {
            con:false,
            question:"Which unit of the computer is considered as the brain of the computer ?",
            options:{
                a:"Memory unit ",
                b:"Input unit ",
                c:"CPU",
                d:"Output unit "
            },
            answer:2
            },
            {
                con:false,
                question:"What is the full form of PROM ?",
                options:{
                    a:"Program read-only memory ",
                    b:"Primary read-only memory ",
                    c:"Programmable read-only memory ",
                    d:"Program read-output memory "
                },
                answer:3
                },
                {
                    con:false,
                    question:"In the context of computing, what is the full form of URL ?",
                    options:{
                        a:"Undistributed Resource Locator ",
                        b:"Unified Resource Locator",
                        c:"Uniform Resource Locator ",
                        d:"Uniform Region Locator "
                    },
                    answer:3
                    }
                ];
                const [viewMarks,setview]=useState(true);
                    const [pageNum,setpageNum]=useState(0);
                    const[score,setScore]=useState(0);
                    const [clickedOption,setClikedOption]=useState(null);
                    const playAgain=()=>{
                        setScore(0);
                        setpageNum(0);
                        setview(true);
                        setClikedOption(true);
                    }
                    const changepage=()=>{
                        setClikedOption(null);
                        if(pageNum<list.length-1){
                            setpageNum(pageNum+1)
                        }
                        else{

                        }
                        
                    }
                    
                    const setviewcon=()=>{
                        setview(false);
                    }
                    const checkAnswer=(index,index2)=>{
                        setClikedOption(index2);
                        if(score>=0){
                            if(list[index].answer===index2+1){
                               if(list[index].con===false) {
                                setScore(score+10);
                                list[index].con=true;
                            }
                               else{}
                                
                        }
                        else{
                            if(list[index].con===true){
                                list[index].con=false;
                                if(score>0){setScore(score-10);}
                                else{};
                            }
                            else{};
                            
                            
                        }
                    }
                     console.log(score,list[index].con)   
                    }
  return (
    <>
      <div className="most-outer">
        <div className="main-div">
            {viewMarks?list.map((elem,index)=>{
                return <>
                {index===pageNum?
                <>
                <div className="question">
                    <p>{index+1}. {elem.question}</p>
                </div>
                <div className="options">

           {elem.options.map((opt,index2)=>{
            return <>
            <button className={`clicked-btn ${clickedOption===index2?"selected":null}`}
        onClick={()=>checkAnswer(index,index2)}>
                {opt}
            </button>
            </>
           })}
           

                </div>
                <div className="pagination">
            {pageNum<2?<button className='btn btn-primary' onClick={()=>changepage()}>submit/next</button>:<button className='btn btn-dark' onClick={()=>setviewcon()}>submit/view Marks</button>}
            
           </div>
                </>
                
                :""}
                </>
            }):<>
            <h2>Result</h2>
            <p className='viewScore'>{score} out of 70</p>
            <button className='btn btn-dark' onClick={()=>playAgain()}>Again</button></>
            }
            
        </div>
      </div>
    </>
  );
}

export default Body;

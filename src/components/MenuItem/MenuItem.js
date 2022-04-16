import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBreakfast, useDinner, useLunch } from '../../hooks/useProduct';
import { BeakerIcon, ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import './MenuItem.css'
const MenuItem = () => {

    // quantity state 
    const [plus,setPlus]=useState(0)
    const [minus,setMinus]=useState(0)
    // image state 

    const [firstImg, setFirstImg] = useState(0)
    const [secondImg, setSecondImg] = useState(1)
    // all store product 
    const [allItem, setAllItem] = useState([])
    // state for id product 
    const [idProduct, setIdProduct] = useState({})
    // store filter product 
    const [filterProduct, setFilterProduct] = useState([])
    const { itemId } = useParams()
    const [breakfast] = useBreakfast()
    const [lunch] = useDinner()
    const [dinner] = useDinner()
    const { img, price, name } = idProduct || {}
    useEffect(() => {
        const allProduct = [...dinner, ...lunch, ...breakfast]
        setAllItem(allProduct)
    }, [dinner, breakfast, lunch])
    // filter product 
    useEffect(() => {
        const findProduct = allItem.find(item => item.id === parseInt(itemId))
        setIdProduct(findProduct)

        if (findProduct) {
            const allFilterProduct = allItem.filter(item => item.category === findProduct.category)
            // const setItem = [new Set(allFilterProduct)]
            setFilterProduct(allFilterProduct)

        }
    }, [allItem])


    // product quantity 
    const handlePlus=()=>{
        setPlus(plus + 1)
        idProduct.quantity=plus + 1
        console.log(idProduct)
    }
    const handleMinnus=()=>{
        if (plus > 0){
            setPlus(plus - 1)
        }
    }


    // index no for img
    let firstIndex = 0;
    let secondIndex = 1;  

    const rightArrow = () => {
        firstIndex += 2
        secondIndex += 2
        if (firstIndex === filterProduct.length) {
            firstIndex = 0
        }
        if (secondIndex === filterProduct.length) {
            secondIndex = 0
        }
        setFirstImg(firstIndex)
        setSecondImg(secondIndex)
    }
    const leftArrow=()=>{
        firstIndex -= 2
        secondIndex -= 2
        if (firstIndex < 0) {
            firstIndex = filterProduct.length - 1
        }
        if (secondIndex < 0 ) {
            secondIndex = filterProduct.length - 2
        }
        console.log(firstIndex,secondIndex)
        setFirstImg(firstIndex)
        setSecondImg(secondIndex)
    }
    const handleFirstImg = product => {
        setIdProduct(product)
        setPlus(0)
       /*  const location=Location.pathname
        let url=location.replace(`menuitem/${product.id}`)
        console.log(url) */
    }
    const handleSecondImg=product=>{
        setIdProduct(product)
        setPlus(0)
    }

    return (
        <div>
            <section className='flex justify-between items-center container h-[100vh]'>
                <div className='w-[45%]'>
                    <div>
                        <h1 className='text-5xl font-bold mb-8'>{name}</h1>
                        <p className='text-xl leading-10 mb-6'>Breakfast foods are rich in key nutrients such as folate, calcium, iron, B vitamins and fibre. Breakfast provides a lot of your days total nutrient intake. In fact, people who eat breakfast are more likely to meet their recommended daily intakes of vitamins and minerals than people who dont. </p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <span className='text-6xl font-bold'>${price}</span>
                        <div className='border-solid border-2 py-3 px-2 rounded-full border-indigo-200 flex items-center text-center  ml-10 text-3xl'>
                            <button onClick={handleMinnus} className=''><MinusIcon className='w-6' /></button>
                            <input className='ml-7 w-[5rem]' type="number" value={plus} />
                            <button onClick={handlePlus} className=''><PlusIcon className='w-6' /></button>
                        </div>
                    </div>
                    <button className='bg-red-500 rounded-full py-3 px-7 items-center flex text-3xl text-white mt-8'><ShoppingCartIcon className='w-8 mr-5' /> Add</button>
                    <div className='mt-16 flex justify-center relative '>
                        <div style={{ transform: 'translate(-50%,-50%)' }} className='absolute top-[50%] left-[50%]  flex justify-between w-full'>
                            <ChevronLeftIcon onClick={leftArrow} className='w-12 cursor-pointer' />
                            <ChevronRightIcon onClick={rightArrow} className='w-12 cursor-pointer' />
                        </div>
                        <div  className='cursor-pointer flex justify-center bg-red-400'>
                            <img onClick={()=>handleFirstImg(filterProduct[firstImg])} className=' w-[12rem] ' src={filterProduct[firstImg]?.img} alt="" />

                            <img onClick={()=>handleSecondImg(filterProduct[secondImg])} className='w-[12rem]' src={filterProduct[secondImg]?.img} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className='w-[50%] flex justify-end'>
                    <img className='w-[40rem]' src={img} alt="" />
                </div>
            </section>
        </div>
    );
};

export default MenuItem;
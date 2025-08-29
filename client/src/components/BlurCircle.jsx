const BlurCircle = ({top ="auto" ,left="auto", right="auto" ,bottom ="auto"}) => {
  return (
    <div className="absolute -z-50 h-58 w-58 aspect-square rounded-sull bg-primary30 clur-3xl"
     style= {{top:top,left :left ,right : right , botton: bottom}}>
    
     
    </div>
  )
}

export default BlurCircle
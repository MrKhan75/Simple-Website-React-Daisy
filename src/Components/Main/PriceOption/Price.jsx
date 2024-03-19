import SinglePrice from "./SinglePrice";


const Price = () => {

   
    const priceOptions = [

        {
           "id":1,
           "name":"Basic Membership",
           "features" : [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access",
            "Personal training sessions available at additional cost"
            
            ],
        
            "price":29.00,
        },

        {
            "id":2,
            "name":"Standard Membership",
            "features":[
                "Access to all equipment including cardio and weightlifting",
                "Group fitness classes included",
                "Locker with lock provided",
                "Discounts on personal training sessions"
            ], 
            
            "price": 49.00,
        
        },
        
        { 
            "id":3,
            "name":"Premium Membership",
            "features": [ 
                "Access to all equipment including cardio and weightlifting",
                "Unlimited access to group fitness classes",
                "Towel service","Priority scheduling for personal training sessions"
            ], 
            
            "price":79.00,
        }
    ];

      
    
    return (
        <div className="mx-10">
                <h2 className="text-4xl text-center my-6 font-semibold">See Our Prices</h2>
                <div className="flex flex-col md:flex-row justify-evenly  gap-5 ">
                    {
                        priceOptions.map(option => <SinglePrice key={option.id} option={option}></SinglePrice>)
                    }
                </div>
        </div>
    );
};

export default Price;
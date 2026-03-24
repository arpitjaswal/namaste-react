export const ContactUs = ()=>{
    return <div className="flex-col p-10 m-10 text-center">
        <h1 className="p-3">Contact Us</h1>
             <span className="flex justify-center items-center p-2">
                <label className="p-2">Name</label>
            <input className="border-2 ml-5" />
             </span>
          <span className="flex justify-center items-center p-2 ">
              <label className="p-2">Mail</label>
            <input className="border-2 ml-5" />
          </span>
          <span className="flex justify-center items-center p-2 ">
              <label className="p-2">Mess.</label>
            <input className="border-2 ml-5" />
          </span>
        <button className="border-2 p-2 bg-amber-300 rounded-lg ml-10">Send Message</button>
    </div>
}
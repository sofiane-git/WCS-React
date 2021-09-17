import Skills from "./Skills";

const Wilder = ({name, city, skills}) => {
  return (
    <div className="wrapper antialiased text-gray-900">
      <div className="m-1">
          
        <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md" />    
          
        <div className="relative px-4 -mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center bg-red-200 flex-col">
              <h1 className="text-2xl">{ name }</h1>
              <h2 className="text-xl"> { city } </h2>
            </div>
            <div className="mt-1 border-b">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
            <div className="mt-4">
            <h4>Wild Skills</h4>
            <ul className="skills">
              {skills.map((skill, index) => {
                return (
                  <Skills 
                    key={index}
                    title={skill.title}
                    vote={skill.vote}
                  />
                )
              })}
              
            </ul>

            </div>  
          </div>
        </div>
        
      </div>
    </div>
  )

}

export default Wilder;
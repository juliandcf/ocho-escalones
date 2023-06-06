const ProgramService = {
    createNewProgramData: () => {
      const currentProgram = {
        id: 1,
        fecha: new Date().toLocaleDateString(), 
        respuestasCorrectas: 0,
        respuestasIncorrectas: 0
      };
  
      localStorage.setItem('currentProgram', JSON.stringify(currentProgram));
      return currentProgram;
    },
    
    getProgramData: () => {
      const programDataString = localStorage.getItem('currentProgram');
      return programDataString ? JSON.parse(programDataString) : null;
    },

    updateProgram: (program) => {    
        localStorage.setItem('currentProgram', JSON.stringify(program));
        return program;
      },
  };
  
  export default ProgramService;
  
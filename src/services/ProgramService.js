const ProgramService = {
    createNewProgramData: () => {
      const currentProgram = {
        id: 1,
        fecha: new Date(),
        respuestasCorrectas: 0,
        respuestasIncorrectas: 0
      };
  
      localStorage.setItem('currentProgram', JSON.stringify(currentProgram));
      return currentProgram;
    },
    
    getProgramData: () => {
      const programDataString = localStorage.getItem('programData');
      return programDataString ? JSON.parse(programDataString) : null;
    }
  };
  
  export default ProgramService;
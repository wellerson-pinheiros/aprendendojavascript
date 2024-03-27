function data (){

    let  hs = new Date()
    let diames = hs.getMonth()
        
     switch(diames){
            case 0 :
              return 'janeiro'
              break
              case 1:
                return 'fevereiro'
                break
                case 2 :
                    return 'março'
                    break
                    case 3 :
                        return 'abril'
                        break
                        case 4:
                            return 'maio'
                            break
                            case 5 :
                                return 'junho'
                                break
                                case 6 :
                                    return 'julho'
                                    break
                                    case 7 :
                                        return 'agosto'
                                        break
                                        case 8:
                                            return 'novembro'
                                            break
                                            case 9: 
                                            return 'dezembro'
                                            break
                        default:
                            return 'erro desconhecido' 
     }}
     let resultado = window.document.getElementById('resultado')
     resultado.innerText='estamos em ' + data()
    
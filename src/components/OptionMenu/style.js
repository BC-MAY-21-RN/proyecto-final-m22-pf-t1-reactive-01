import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';
export const styles = StyleSheet.create({
  container: {
    margin:10,
    height: 50,
    padding:10,
    backgroundColor: theme.BACKGROUND_COLOR,
    flexDirection:'row',
    justifyContent:'space-between',
    borderColor: theme.PRIMARY_COLOR,
    borderBottomWidth:1.8
    
    
  },
  icon:{
   
    alignItems:'flex-start',
    
  
  },
  Tex:{
    alignSelf:'flex-start',
    textAlign:'right',
    


  },
  iconMenu:{
    alignContent:'flex-start',
    
    
  },
  title:{
    textAlign:'left'
  }
});

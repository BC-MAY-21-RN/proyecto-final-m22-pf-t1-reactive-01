import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';
export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: theme.WIDTH_SCREEN,
    backgroundColor: theme.PRIMARY_COLOR,
    flexDirection:'row',
    justifyContent:'space-evenly',
    borderRadius:15
    
  },
  img:{
    marginTop:20,
    marginLeft:10, 
    paddingTop:20,
    paddingRight:10,
    width:50,
    height:50,
    borderRadius:100,  
  },
  TextName:{
    fontSize:theme.FONT_SIZE,
    fontFamily:theme.FONT_FAMILY,
    color:theme.FONT_COLOR
    
  },
  containerText:{
    justifyContent:'center',
    alignContent:'center'
  },
});

import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';
export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: theme.WIDTH_SCREEN,
    backgroundColor: theme.PRIMARY_COLOR,
    flexDirection:'row',
    justifyContent:'space-between'
    
  },
  img:{
    marginTop:20,
    marginLeft:10, 
    paddingTop:20,
    width:50,
    height:50,
    borderRadius:100,
  },
  icon:{
    alignItems:'flex-start',
  
  },
  TextName:{
    fontSize:theme.FONT_SIZE,
    fontFamily:theme.FONT_FAMILY,
    
  },
  containerText:{
    justifyContent:'center',
    alignContent:'center'
  },
});

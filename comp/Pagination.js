// import { StyleSheet, Text, TouchableOpacity,View } from "react-native";
// import React from 'react'

// export default function Pagination({ items,perPage,setItems }) {

  
//   const [page, setPage] = React.useState(1)
//   console.log(items.length / perPage );
//   const totalPages = Math.round(items.length / perPage);

//   React.useEffect(() => {
//     newItems = items.slice(((page - 1) * perPage ),perPage * page)
//     setItems(newItems)
//   }, [page])
  
//   return items.length > 0 ? (
//     <View style={s.scroll}>
//       <TouchableOpacity style={s.btn} onPress={() => setPage(page-1)}>
//       <Text style={{color: 'white'}} >Prev</Text>
//       </TouchableOpacity>
//       <Text  >{page}/{totalPages}</Text>
//       <TouchableOpacity style={s.btn} onPress={() => setPage(page+1)}>
//       <Text style={{color: 'white'}} >Next</Text>
//       </TouchableOpacity>
//     </View>
//   ) : (
//     ""
//   );
// }

// const s = StyleSheet.create({
//   btn:{
//     backgroundColor:'teal',
//     padding: 10,
//     borderRadius: 10,
//     paddingLeft: 50,
//     paddingRight: 50,
//     margin:10,
//     color: 'white'
//   },
//   scroll: {
//     flexDirection:'row',
//     margin: 10,
//     marginBottom: 125,
//     justifyContent: 'center',
//     alignItems:'center',
//     backgroundColor: "whitesmoke",
//   },
// });

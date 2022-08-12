import { useState, useEffect } from 'react'
import { Box } from '@mui/system'
// import SyncAltIcon from '@mui/icons-material/SyncAlt';
// import CustomInput from 'component/SmallComponent/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
// import { SetSearchResult, SetSearchTextFrom, SetSearchTextTo, SetFailed, SwapTextFieldsValues, SearchTextToDetails, SearchTextFromDetails} from "../reduxItem/slice/TravelSlice"
// import { StanderMediaQuery } from 'component/MediaQuery';
// import { Button, Stack } from '@mui/material'
// import CustomRadioGroups from 'component/SmallComponent/CuntomRadioGroups';
// import CollapseFilter from 'component/SmallComponent/Filtering/CollapseFilter';
// import CustomButton from 'component/SmallComponent/CustomButton';

export default function TravelComponent() {

  const dispatch = useDispatch();
  const { Loading, HasErrors, ErrorDetails, SearchTextFrom, SearchTextTo, SeachResult } = useSelector(state => state.Travel)



  useEffect(() => {
  

  }, [SearchTextFrom])


  const handleSwipe = (key) => {

    dispatch()


  };

  const handelClickSearch = () => {
  
  }
  return (
    <Box>
      <h1>hello1</h1>

      {/* <Stack className='p-10' alignItems="center" direction={StanderMediaQuery() ? 'column' : 'row'}
        spacing={StanderMediaQuery() ? 2 : 4}  position="relative">

        <CustomInput name="SearchTextFrom" width='100%' placeholder="Where do you want to go from?"  wordEntered={SearchTextFrom} setWordEntered={SetSearchTextFrom} />
        <Button position="absolute" onClick={() => {
          const preValue = SearchTextFrom;
          dispatch(SwapTextFieldsValues(preValue))
        }}><SyncAltIcon sx={{ fontSize: "2rem" }} color={'primary'} /></Button>
        <CustomInput name="SearchTextTo"  width="100%"  placeholder="Where do you want to go To?" wordEntered={SearchTextTo} setWordEntered={SetSearchTextTo} />
      </Stack>

      <CustomRadioGroups />
      
      <CollapseFilter/>
      <Stack sx={{width:"100%", display:"flex", alignItems:"center"}}>
      <CustomButton marginBottom="1rem" width="15vw" height="3rem" justifyContent="center"/>
      </Stack> */}

    </Box>
  )
}



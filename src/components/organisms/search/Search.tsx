import {
  Input
} from '@chakra-ui/react';

const Search = ():JSX.Element => {
  return (
    <>
      <Input
        w="30%"
        type="text"
        placeholder="Search"
        color="blue.800"
        bg="blue.50"
        rounded="2xl"
        border="0"
        _focus={{
          bg: "blue.200",
          outline: "none",
      }}
    />
    </>
  )
}
export default Search;

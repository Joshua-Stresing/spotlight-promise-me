export default function App() {
const handleClick = (callback) => {
  const result = callback();
  console.log(result);
};

  return (
   <>
   <button onClick={async () => console.log(await asyncGetQuotes())}>Async get quotes</button> 
  
   <button onClick={async () => console.log(await GetQuotes())}>Get quotes</button> 
  
   <button onClick={async () => console.log(await asyncTryGetQuotes())}>Try to get quotes</button> 

   <button onClick={async () => console.log(await thenTryGetQuotes())}>Try to get quotes</button> 

   <button onClick={async () => console.log(await thenTryGetQuotes())}>Try to get quotes</button> 
   </>
  );
}

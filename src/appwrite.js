import { Query, Databases, ID, Client } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTON_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID)

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
 try{
  const result = await database.listDocuments(DATABASE_ID, COLLECTON_ID, [Query.equal('searchTerm', searchTerm),
  ])
 if(result.documents.lenght > 0){
  const doc = result.documents[0];

  await database.updateDocument(DATABASE_ID, COLLECTON_ID, doc.$id, {
    count: doc.count + 1,
  })
 }else{
  await database.createDocument(DATABASE_ID, COLLECTON_ID,  ID.unique(),{
    searchTerm,
    count:1,
    movie_id: movie.id,
    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  })
 }
 }catch(error){
  console.log(error)
 }
}
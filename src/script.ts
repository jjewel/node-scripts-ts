import * as fetch from 'isomorphic-fetch';

interface IDogBreeds {
  [name: string]: string[];
}

interface IDogBreedsResponse {
  status: 'success' | 'failed';
  message: IDogBreeds;
}

(async () => {
  const test: number = 1;
  const dogBreeds: IDogBreedsResponse = await fetch('https://dog.ceo/api/breeds/list/all', {
    method: 'GET',
  })
  .then((res: Response) => res.json());

  console.log('dogBreeds', dogBreeds.message);
})();

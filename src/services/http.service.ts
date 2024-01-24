interface OptionsType {
    method:'GET'|'POST'|'PUT'|'DELETE'
    payload: BodyInit | null
    hasAuth:boolean
    contentType: 'application/json'
}

class Http {

    public async load<T>(
        url: string,
        options: OptionsType
      ): Promise<T> | never {
        const {
          method = 'GET',
          payload = null,
          hasAuth = true,
          contentType = 'application/json',
        } = options;
        console.log(payload)
        const headers = this.#getHeaders(hasAuth,contentType)
    
        return await fetch(url,{
            method,
            headers,
            body:method === 'GET' ? undefined : payload
        })
          .then(this.#checkStatus)
          .then<T>(this.#parseJSON)
          .catch(this.#throwError);
      }


      #checkStatus = async (response: Response): Promise<Response> => {
        if (!response.ok) {
          const parsedException = (await response.json().catch(() => ({
            message: response.statusText
          }))) as Record<'message', string>;
    
          throw new Error(`Code:${response.status}.Message:${parsedException.message}`);
        }
    
        return response;
      };

      #getHeaders(hasAuth:boolean, contentType: 'application/json') {
        
        const headers = new Headers();

        if (contentType) {
          headers.append('Content-Type', contentType);
        }
    
        if (hasAuth) {
            const token = localStorage.getItem('token')
    
          headers.append('Authorization', `Bearer ${token}`);
        }
    
        return headers;
      }

      #parseJSON = <T>(response: Response): Promise<T> => {
        return response.json() as Promise<T>;
      };
    
      #throwError = (error: Error): never => {
        throw error;
      };
}



const httpApi = new Http()

export default httpApi
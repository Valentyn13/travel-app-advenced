import { OptionsType } from "../types/optionts.types";
import { HttpError } from "./exception/http-error.exception";

class Http {
  public async load<T>(url: string, options: OptionsType): Promise<T> | never {
    const {
      method = "GET",
      payload = null,
      hasAuth = true,
      contentType = "application/json",
    } = options;
    const headers = this.#getHeaders(hasAuth, contentType);

    return await fetch(url, {
      method,
      headers,
      body: method === "GET" ? undefined : payload,
    })
      .then(this.#checkStatus)
      .then<T>(this.#parseJSON)
      .catch(this.#throwError);
  }

  #checkStatus = async (response: Response): Promise<Response> => {
    if (!response.ok) {
      const parsedException = (await response.json().catch(() => ({
        message: response.statusText,
      }))) as Record<"message", string>;

      throw new HttpError({
        status: response.status,
        message: parsedException.message,
      });
    }
    return response;
  };

  #getHeaders(hasAuth: boolean, contentType: "application/json") {
    const headers = new Headers();

    if (contentType) {
      headers.append("Content-Type", contentType);
    }

    if (hasAuth) {
      const token = localStorage.getItem("token");

      headers.append("Authorization", `Bearer ${token}`);
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

const httpApi = new Http();

export default httpApi;

export interface OptionsType {
  method: "GET" | "POST" | "PUT" | "DELETE";
  payload: BodyInit | null;
  hasAuth: boolean;
  contentType: "application/json";
}

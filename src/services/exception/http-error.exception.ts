type Constructor = {
  status: number | string;
  message: string;
};

class HttpError extends Error {
  public status;

  public constructor({ status, message }: Partial<Constructor> = {}) {
    super(message);
    this.status = status;
    this.name = "http error";
  }
}

export { HttpError };

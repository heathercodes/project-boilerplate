export async function get(url: string): Promise<any> {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${process.env.REACT_APP_API_TOKEN}`,
        Accept: 'application/vnd.pagerduty+json;version=2',
      },
    });

    return response.json();
  } catch (err) {
    return Promise.reject(new Error(err));
  }
}

export async function post(url: string, payload: Record<string, unknown>): Promise<any> {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${process.env.REACT_APP_API_TOKEN}`,
        Accept: 'application/vnd.pagerduty+json;version=2',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  } catch (err) {
    return Promise.reject(new Error(err));
  }
}

export async function put(url: string, payload: Record<string, unknown>): Promise<any> {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${process.env.REACT_APP_API_TOKEN}`,
        Accept: 'application/vnd.pagerduty+json;version=2',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  } catch (err) {
    return Promise.reject(new Error(err));
  }
}

export async function remove(url: string, payload: Record<string, unknown>): Promise<any> {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token token=${process.env.REACT_APP_API_TOKEN}`,
        Accept: 'application/vnd.pagerduty+json;version=2',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  } catch (err) {
    return Promise.reject(new Error(err));
  }
}

export const INITAL_LOGIN_FORM = {
    email: "",
    password: "",
};

export const INITAL_STATE_LOGIN_FORM = {
    status: 'idle',
    errors: {
        email: [],
        password: [],
        _form: [],
    },
};


export const INITIAL_STATE_PROFILE = {
    id: '',
    name: '',
    avatar_url: '',
    role: '',
}

export const INITAL_CREATE_USER_FORM = {
    name: '',
    role: '',
    avatar_url: '',
    email: '',
    password: '',
}

export const INITAL_STATE_CREATE_USER = {
    status: 'idle',
    errors: {
        name: [],
        role: [],
        avatar_url: [],
        email: [],
        password: [],
        _form: [],
    }
};

export const INITAL_STATE_UPDATE_USER = {
    status: 'idle',
    errors: {
        name: [],
        role: [],
        avatar_url: [],
        _form: [],
    }
};

export const INITAL_UPDATE_USER_FORM = {
    name: '',
    role: '',
    avatar_url: '',
}

export const ROLE_LIST = [
    {
        value: 'admin',
        label: 'Admin',
    },
    {
        value: 'kitchen',
        label: 'Kitchen',
    },
    {
        value: 'cashier',
        label: 'Cashier',
    },
];

export const AVAILABILITY_LIST = [
    {
        value: 'true',
        label: 'available',
    },
    {
        value: 'false',
        label: 'Not available',
    },
];

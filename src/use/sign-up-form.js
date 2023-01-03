import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'

export function  useSignUpForm () {
    const router = useRouter()
    const store = useStore()
    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Введіть Email')
            .email('Будь ласка, введіть корректний email')
    )

    const MIN_LENGTH = 6
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Ввудіть пароль')
            .min(MIN_LENGTH, `Мінімальна кількість символів ${MIN_LENGTH} `)
    )

    const {value: fullName, errorMessage: nError, handleBlur: nBlur} = useField(
        'fullName',
        yup
            .string()
            .required(`Введіть прізвище та ім'я`)


    )

    const {value: bDate, errorMessage: bError, handleBlur: bBlur} = useField(
        'bDate',
        yup
            .string()
            .required(`Вкажіть дату народження`)

    )
    const {value: phone, errorMessage: phError, handleBlur: phBlur} = useField(
        'phone',
        yup
            .string()
            .required(`Введіть ваш номер телефону`)
            // .length ('13')

    )
    const {value: zone, errorMessage: zError, handleBlur: zBlur} = useField(
        'zone',
        yup
            .string()
            .required(`Оберіть ваш філіал`)

    )

    const {value: dCode, errorMessage: dCodeError, handleBlur: dCodeBlur} = useField(
        'dCode',
        yup
            .string()
            .required(`Вкажіть дату народження`)

    )

    const isTooManyAttempts = computed(() => submitCount.value >= 3)

    watch(isTooManyAttempts, val=> {
        if (val) {
            setTimeout(() => submitCount.value = 0, 2000)
        }
    })
    const onSubmit = handleSubmit (async values => {
        console.log('values from login form', values)
        try {
            await store.dispatch('login', values)
            await router.push('/')
        } catch (e) {
            console.log(e)
        }
    })

    const onSignUp = handleSubmit (async values => {
        // console.log(values)
        try {
            await store.dispatch('signUp', values)
            // console.log('values from sign up', values)
            await router.push('auth')
        } catch (e) {
        }
    })

    return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts,
        onSignUp,
        phone,
        phError,
        phBlur,
        dCode,
        dCodeError,
        dCodeBlur,
        fullName,
        nError,
        nBlur,
        bDate,
        bError,
        bBlur,
        zone,
        zError,
        zBlur

    }

}

export const apiMessages = (code: string) => {
    const messages = Object({
        'CART_DELETE:NOT_FOUND': '',
        'CART_DELETE:SUCCESS': '',
        'CART_GET:NOT_FOUND': '',
        'CART_UPDATE:NOT_FOUND': '',
        'CART_UPDATE:SUCCESS': '',
        'CONTACT_CREATE:SUCCESS': '',
        'CONTACT_DELETE:NOT_FOUND': '',
        'CONTACT_DELETE:SUCCESS': '',
        'CUSTOMER_CREATE:SUCCESS': '',
        'CUSTOMER_CREATE:EMAIL_EXIST': '',
        'CUSTOMER_CREATE:PHONE_EXIST': '',
        'CUSTOMER_DELETE:NOT_FOUND': '',
        'CUSTOMER_DELETE:SUCCESS': '',
        'CUSTOMER_GET:NOT_FOUND': '',
        'CUSTOMER_REPLACE:NOT_FOUND': '',
        'CUSTOMER_REPLACE:SUCCESS': '',
        'CUSTOMER_UPDATE:NOT_FOUND': '',
        'CUSTOMER_UPDATE:SUCCESS': '',
        'CUSTOMER_SIGNIN:SUCCESS': 'Đăng nhập thành công!',
        'CUSTOMER_SIGNUP:SUCCESS': 'Đăng ký thành công!',
        'CUSTOMER_SIGNUP:EMAIL_EXIST': 'Đã có tài khoản cho email: <DETAIL>',
        'CUSTOMER_SIGNUP:PHONE_EXIST':
            'Đã có tài khoản cho số điện thoại: <DETAIL>',
        'ORDER_CREATE:SUCCESS': '',
        'ORDER_DELETE:NOT_FOUND': '',
        'ORDER_DELETE:SUCCESS': '',
        'ORDER_GET:NOT_FOUND': '',
        'ORDER_UPDATE:NOT_FOUND': '',
        'ORDER_UPDATE:SUCCESS': '',
        'PRODUCT_CREATE:SUCCESS_${newProduct.id}': '',
        'PRODUCT_GET:NOT_FOUND_${productID}': '',
        'PRODUCT_UPDATE:NOT_FOUND_${productID}': '',
        'PRODUCT_UPDATE:SUCCESS_${product.id}': '',
        'PRODUCT_DELETE:NOT_FOUND_${productID}': '',
        'PRODUCT_DELETE:SUCCESS_${product.id}': '',
        'PRODUCTRATING_CREATE:SUCCESS_${newProductRating.id}': '',
        'PRODUCTRATING_GET:NOT_FOUND_${productRatingID}': '',
        'PRODUCTRATING_UPDATE:NOT_FOUND_${productRatingID}': '',
        'PRODUCTRATING_UPDATE:SUCCESS_${productRating.id}': '',
        'PRODUCTRATING_DELETE:NOT_FOUND_${productRatingID}': '',
        'PRODUCTRATING_DELETE:NOT_FOUND_${productRating.id}': '',
        'CUSTOMER_SIGNIN:USERNAME_INVALID': '',
        'CUSTOMER_SIGNIN:EMAIL_NOT_FOUND': 'Không tìm thấy tài khoản: <DETAIL>',
        'CUSTOMER_SIGNIN:PASSWORD_INCORRECT': 'Mật khẩu chưa đúng',
        'CUSTOMER_SIGNIN:PHONE_NOT_FOUND': 'Không tìm thấy tài khoản: <DETAIL>',
        // "CUSTOMER_SIGNIN:PASSWORD_INCORRECT": ""
    })

    return messages[code]
}

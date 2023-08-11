import React from 'react'
import {
    FAQContainer,
    Title,
    Question,
    AnswerWrapper,
    AnswerTitle,
    AnswerDetails,
} from './styles'
import bankqr from '../../assets/bank_qr.jpg'

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="w-full max-w-[1000px] my-8 mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold my-8">Chính Sách Bảo Mật</h1>
            <p className="leading-8">
                Cập nhật lần cuối: ngày 09, Tháng Tám, 2023
            </p>
            <p className="leading-8">
                Chính sách Bảo mật này mô tả chính sách và thủ tục của Chúng tôi
                về việc thu thập, sử dụng và tiết lộ thông tin cá nhân của Bạn
                khi Bạn sử dụng Trang web{' '}
                <a
                    href="https://morningbasket.vn"
                    className="text-indigo-600 hover:underline"
                >
                    https://morningbasket.vn
                </a>
                , và cho Bạn biết về quyền riêng tư của mình cũng như cách thức
                pháp luật bảo vệ Bạn.
            </p>
            <p className="leading-8">
                Chúng tôi sử dụng Dữ liệu cá nhân của Bạn để cung cấp và cải
                thiện Trang web. Bằng cách sử dụng Trang web, Bạn cho phép Chúng
                tôi thu thập và sử dụng thông tin thể theo Chính sách Bảo mật
                này.
            </p>
            <h1 className="text-4xl font-bold my-8">
                Giải thích và Định nghĩa
            </h1>
            <h2 className="text-3xl font-bold my-4">Giải thích</h2>
            <p className="leading-8">
                Những từ mà chữ cái đầu tiên được viết hoa có ý nghĩa được xác
                định theo các điều kiện như sau. Sau đây các định nghĩa sẽ có
                cùng một ý nghĩa bất kể chúng xuất hiện ở số ít hay số nhiều.
            </p>
            <h2 className="text-3xl font-bold my-4">Định nghĩa</h2>
            <p className="leading-8">Dùng cho Chính sách Bảo mật này:</p>
            <ul className="list-disc list-inside ml-4 leading-8">
                <li>
                    <strong>Tài khoản</strong> nghĩa là một tài khoản riêng biệt
                    được tạo để Bạn truy cập vào toàn bộ hay một phần Trang web
                    của Chúng tôi.
                </li>
                {/* <li>
                    <strong>Đơn vị liên kết</strong> nghĩa là một thực thể kiểm soát, chịu
                    sự kiểm soát hoặc dưới sự kiểm soát chung với một bên, trong đó
                    &quot;kiểm soát&quot; có nghĩa là sở hữu từ 50% trở lên cổ phần, lợi ích
                    vốn cổ phần hoặc chứng khoán khác có quyền bỏ phiếu bầu
                    giám đốc hoặc cơ quan quản lý khác .
                </li> */}
                <li>
                    <strong>Chúng tôi</strong> (và/hoặc &quot;của Chúng
                    tôi&quot; trong Thỏa thuận này) đề cập đến Morning Basket,
                    B1F-10, Crescent Mall, Quận 7, Thành phố Hồ Chí Minh.
                </li>
                <li>
                    <strong>Cookies</strong> là các tập tin nhỏ được lưu trữ
                    trên thiết bị của Bạn (máy tính, điện thoại, hoặc bất kỳ
                    thiết bị nào khác) chứa các chi tiết về lịch sử duyệt web
                    của Bạn trên một trang web.
                </li>
                <li>
                    <strong>Quốc gia</strong> đề cập đến: Việt Nam
                </li>
                <li>
                    <strong>Thiết bị</strong> nghĩa là bất kỳ thiết bị nào có
                    thể truy cập Trang web, chẳng hạn như máy tính, điện thoại
                    di động hoặc máy tính bảng kỹ thuật số.
                </li>
                <li>
                    <strong>Dữ liệu Cá nhân</strong> là bất kỳ thông tin nào
                    liên quan đến một cá nhân đã được xác định hoặc có thể xác
                    định được.
                </li>
                <li>
                    <strong>Nhà cung cấp dịch vụ</strong> nghĩa là bất kỳ thể
                    nhân hoặc pháp nhân nào xử lý dữ liệu thay mặt cho Chúng
                    tôi. Nó đề cập đến các công ty hoặc cá nhân bên thứ ba được
                    Chúng tôi tuyển dụng để hỗ trợ Trang web, cung cấp Trang web
                    thay mặt cho Chúng tôi, thực hiện các dịch vụ liên quan đến
                    Trang web hoặc hỗ trợ Chúng tôi phân tích cách sử dụng Trang
                    web.
                </li>
                <li>
                    <strong>Dữ liệu sử dụng</strong> đề cập đến dữ liệu được thu
                    thập tự động, được tạo bởi việc sử dụng Trang web hoặc từ
                    chính cơ sở hạ tầng của Trang web (ví dụ: thời lượng của một
                    lượt truy cập trang).
                </li>
                <li>
                    <strong>Trang web</strong> đề cập đến Morning Basket, có thể
                    truy cập tại{' '}
                    <a
                        href="https://morningbasket.vn"
                        rel="external nofollow noopener"
                        target="_blank"
                        className="text-indigo-600 hover:underline"
                    >
                        https://morningbasket.vn
                    </a>
                </li>
                <li>
                    <strong>Bạn</strong> nghĩa là cá nhân truy cập hoặc sử dụng
                    Trang web, hoặc công ty hoặc pháp nhân khác thay mặt cho cá
                    nhân đó đang truy cập hoặc sử dụng Trang web, nếu có.
                </li>
            </ul>
            <h1 className="text-4xl font-bold my-8">
                Thu thập và Sử dụng Dữ liệu cá nhân của Bạn
            </h1>
            <h2 className="text-3xl font-bold my-4">
                Các loại dữ liệu được thu thập
            </h2>
            <h3 className="text-2xl font-bold my-4">Dữ liệu cá nhân</h3>
            <p className="leading-8">
                Trong khi sử dụng Trang web của Chúng tôi, Chúng tôi có thể yêu
                cầu Bạn cung cấp cho Chúng tôi một số thông tin định danh cá
                nhân nhất định có thể được sử dụng để liên hệ hoặc định danh
                Bạn. Thông tin định danh cá nhân có thể bao gồm, nhưng không
                giới hạn trong:
            </p>
            <ul className="list-disc list-inside ml-4 leading-8">
                <li>Địa chỉ email</li>
                <li>Họ và Tên</li>
                <li>Số điện thoại</li>
                <li>
                    Số nhà, Tên đường, Xã/Phường, Quận/Huyện, Tỉnh/Thành phố
                </li>
                <li>Dữ liệu sử dụng</li>
            </ul>
            <h3 className="text-2xl font-bold my-4">Dữ liệu sử dụng</h3>
            <p className="leading-8">
                Dữ liệu sử dụng được thu thập tự động khi sử dụng Trang web.
            </p>
            <p className="leading-8">
                Dữ liệu sử dụng có thể bao gồm thông tin như Thiết bị của Bạn
                Địa chỉ Giao thức Internet (ví dụ: địa chỉ IP), loại trình
                duyệt, phiên bản trình duyệt, các trang Trang web của Chúng tôi
                mà Bạn truy cập, thời gian và ngày truy cập của Bạn, thời gian
                dành cho các trang đó, số nhận dạng thiết bị duy nhất và dữ liệu
                chẩn đoán khác.
            </p>
            <p className="leading-8">
                Khi Bạn truy cập Trang web bằng hoặc thông qua thiết bị di động,
                Chúng tôi có thể tự động thu thập một số thông tin nhất định,
                bao gồm, nhưng không giới hạn, loại thiết bị di động Bạn sử
                dụng, mã định danh (ID) của thiết bị di động của Bạn, địa chỉ IP
                của thiết bị di động của Bạn, hệ điều hành của thiết bị di động
                của Bạn, loại trình duyệt Internet trên thiết bị di động mà Bạn
                sử dụng và dữ liệu chẩn đoán khác.
            </p>
            <p className="leading-8">
                Chúng tôi cũng có thể thu thập thông tin mà trình duyệt của Bạn
                gửi bất cứ khi nào Bạn truy cập Trang web của Chúng tôi hoặc khi
                Bạn truy cập Trang web bằng hoặc thông qua thiết bị di động.
            </p>
            {/* <h3 className="text-2xl font-bold my-4">
                Công nghệ theo dõi và Cookies
            </h3>
            <p className="leading-8">
                Chúng tôi sử dụng Cookies và các công nghệ theo dõi tương tự để theo dõi
                hoạt động trên Trang web của Chúng tôi và lưu trữ một số thông tin nhất định.
                Các công nghệ theo dõi được sử dụng là beacon, tag và tập lệnh để thu thập và
                theo dõi thông tin và để cải thiện và phân tích Trang web của Chúng tôi. Các
                công nghệ Chúng tôi sử dụng có thể bao gồm:
            </p>
            <ul className="list-disc list-inside ml-4 leading-8">
                <li>
                    <strong>Cookies hay Cookies trình duyệt.</strong> Một cookie là một
                    tập tin nhỏ được đặt trên Thiết bị của Bạn. Bạn có thể hướng dẫn
                    trình duyệt từ chối tất cả Cookie hoặc cho biết khi nào Cookie
                    đang được gửi. Tuy nhiên, nếu Bạn không chấp nhận Cookie, Bạn
                    có thể không sử dụng được một số phần trong Trang web của Chúng tôi. Trong trường hợp Bạn
                    đã điều chỉnh cài đặt trình duyệt của Bạn để nó từ chối
                    Cookies: Trang web của Chúng tôi có thể sử dụng Cookies.
                </li>
                <li>
                    <strong>Web Beacons.</strong> Một số phần của
                    Trang web và email của Chúng tôi có thể chứa các tập tin nhỏ
                    được gọi là web beacons (còn được gọi là ảnh "clear gif", thẻ pixel
                    và gif đơn pixel) cho phép Chúng tôi,
                    ví dụ, đếm người dùng đã truy cập các trang đó hoặc
                    đã mở một email và cho các số liệu thống kê trang web liên quan khác
                    (ví dụ: ghi độ phổ biến của một chuyên mục nào đó
                    và xác minh tính toàn vẹn của hệ thống và máy chủ).
                </li>
            </ul>
            <p className="leading-8">
                Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
                Cookies. Persistent Cookies remain on Your personal computer or
                mobile device when You go offline, while Session Cookies are
                deleted as soon as You close Your web browser. You can learn
                more about cookies on{" "}
                <a
                    href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
                    target="_blank"
                >
                    TermsFeed website
                </a>{" "}
                article.
            </p>
            <p className="leading-8">
                We use both Session and Persistent Cookies for the purposes set
                out below:
            </p>
            <ul className="list-disc list-inside ml-4 leading-8">
                <li>
                    <strong>Necessary / Essential Cookies</strong>
                    <p className="leading-8">Type: Session Cookies</p>
                    <p className="leading-8">Administered by: Us</p>
                    <p className="leading-8">
                        Purpose: These Cookies are essential to provide You with
                        services available through the Website and to enable You
                        to use some of its features. They help to authenticate
                        users and prevent fraudulent use of user accounts.
                        Without these Cookies, the services that You have asked
                        for cannot be provided, and We only use these Cookies to
                        provide You with those services.
                    </p>
                </li>
                <li>
                    <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                    <p className="leading-8">Type: Persistent Cookies</p>
                    <p className="leading-8">Administered by: Us</p>
                    <p className="leading-8">
                        Purpose: These Cookies identify if users have accepted
                        the use of cookies on the Website.
                    </p>
                </li>
                <li>
                    <strong>Functionality Cookies</strong>
                    <p className="leading-8">Type: Persistent Cookies</p>
                    <p className="leading-8">Administered by: Us</p>
                    <p className="leading-8">
                        Purpose: These Cookies allow us to remember choices You
                        make when You use the Website, such as remembering your
                        login details or language preference. The purpose of
                        these Cookies is to provide You with a more personal
                        experience and to avoid You having to re-enter your
                        preferences every time You use the Website.
                    </p>
                </li>
            </ul>
            <p className="leading-8">
                For more information about the cookies we use and your choices
                regarding cookies, please visit our Cookies Policy or the
                Cookies section of our Chính sách Bảo mật.
            </p> */}
            <h2 className="text-3xl font-bold my-4">
                Sử dụng Dữ liệu Cá nhân của Bạn
            </h2>
            <p className="leading-8">
                Chúng tôi có thể sử dụng Dữ liệu Cá nhân cho các mục đích sau:
            </p>
            <ul className="list-disc list-inside ml-4 leading-8">
                <li>
                    <strong>Để cung cấp và duy trì Trang web</strong>, bao gồm
                    cả việc giám sát việc sử dụng Trang web của Chúng tôi.
                </li>
                <li>
                    <strong>Để quản lý Tài khoản của Bạn:</strong> để quản lý
                    đăng ký của Bạn với tư cách là người dùng Trang web. Dữ liệu
                    Cá nhân mà Bạn cung cấp có thể cấp cho Bạn quyền truy cập
                    vào các chức năng khác nhau của Trang web dành cho Bạn với
                    tư cách là người dùng đã đăng ký.
                </li>
                <li>
                    <strong>Cho việc thực hiện hợp đồng:</strong> việc phát
                    triển, tuân thủ và thực hiện hợp đồng mua bán các sản phẩm,
                    mặt hàng hoặc dịch vụ mà Bạn đã mua hoặc bất kỳ hợp đồng nào
                    khác với Chúng tôi thông qua Trang web.
                </li>
                <li>
                    <strong>Để liên hệ Bạn:</strong> Để liên hệ với Bạn qua
                    email, cuộc gọi điện thoại, SMS hoặc các hình thức liên lạc
                    điện tử tương đương khác, chẳng hạn như thông báo đẩy của
                    ứng dụng di động về các bản cập nhật hoặc thông tin liên lạc
                    thông tin liên quan đến chức năng, sản phẩm hoặc dịch vụ
                    theo hợp đồng, bao gồm các bản cập nhật bảo mật, khi cần
                    thiết hoặc hợp lý cho việc thực hiện chúng.
                </li>
                <li>
                    <strong>Để cung cấp cho Bạn</strong> tin tức, ưu đãi đặc
                    biệt và thông tin chung về các hàng hóa, dịch vụ và sự kiện
                    khác mà Chúng tôi cung cấp tương tự như những hàng hóa, dịch
                    vụ và sự kiện mà Bạn đã mua hoặc quan tâm trừ khi Bạn đã
                    chọn không nhận thông tin đó.
                </li>
                <li>
                    <strong>Để quản lý các yêu cầu từ Bạn:</strong> Để tham gia
                    và quản lý các yêu cầu của Bạn đối với Chúng tôi.
                </li>
                {/* <li>
                    <strong>For business transfers:</strong> We may use Your
                    information to evaluate or conduct a merger, divestiture,
                    restructuring, reorganization, dissolution, or other sale or
                    transfer of some or all of Our assets, whether as a going
                    concern or as part of bankruptcy, liquidation, or similar
                    proceeding, in which Personal Data held by Us about our
                    Service users is among the assets transferred.
                </li> */}
                <li>
                    <strong>Cho các mục đích khác:</strong> Chúng tôi có thể sử
                    dụng thông tin của Bạn cho các mục đích khác, chẳng hạn như
                    phân tích dữ liệu, xác định xu hướng sử dụng, xác định hiệu
                    quả của các chiến dịch quảng cáo và để đánh giá cũng như cải
                    thiện Trang web, sản phẩm, dịch vụ, tiếp thị và trải nghiệm
                    của Bạn.
                </li>
            </ul>
            <p className="leading-8">
                Chúng tôi có thể chia sẻ thông tin cá nhân của Bạn trong các
                trường hợp sau:
            </p>
            <ul className="list-disc list-inside ml-4 leading-8">
                <li>
                    <strong>Với Nhà cung cấp dịch vụ:</strong> Chúng tôi có thể
                    chia sẻ thông tin cá nhân của Bạn với Nhà cung cấp dịch vụ
                    để theo dõi và phân tích việc sử dụng Trang web của Chúng
                    tôi, để liên hệ với Bạn.
                </li>
                {/* <li>
                    <strong>For business transfers:</strong> We may share or
                    transfer Your personal information in connection with, or
                    during negotiations of, any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of Our
                    business to another company.
                </li> */}
                {/* <li>
                    <strong>With Affiliates:</strong> We may share Your
                    information with Our affiliates, in which case we will
                    require those affiliates to honor this Chính sách Bảo mật.
                    Affiliates include Our parent company and any other
                    subsidiaries, joint venture partners or other companies that
                    We control or that are under common control with Us.
                </li> */}
                <li>
                    <strong>Với các đối tác kinh doanh:</strong> Chúng tôi có
                    thể chia sẻ thông tin của Bạn với các đối tác kinh doanh của
                    Chúng tôi để cung cấp cho Bạn một số sản phẩm, dịch vụ hoặc
                    chương trình khuyến mãi.
                </li>
                <li>
                    <strong>Với những người dùng khác:</strong> khi Bạn chia sẻ
                    thông tin cá nhân hoặc tương tác trong các khu vực công cộng
                    với những người dùng khác, thông tin đó có thể được xem bởi
                    tất cả người dùng và có thể được phân phối công khai ra bên
                    ngoài.
                </li>
                <li>
                    <strong>Với sự đồng ý của Bạn:</strong> Chúng tôi có thể
                    tiết lộ thông tin cá nhân của Bạn cho bất kỳ mục đích nào
                    khác với sự đồng ý của Bạn.
                </li>
            </ul>
            <h2 className="text-3xl font-bold my-4">
                Lưu giữ Dữ liệu Cá nhân của Bạn
            </h2>
            <p className="leading-8">
                Chúng tôi sẽ chỉ lưu giữ Dữ liệu Cá nhân của Bạn trong thời gian
                cần thiết cho các mục đích được nêu trong Chính sách Bảo mật
                này. Chúng tôi sẽ lưu giữ và sử dụng Dữ liệu Cá nhân của Bạn
                trong phạm vi cần thiết để tuân thủ các nghĩa vụ pháp lý của
                Chúng tôi (ví dụ: nếu Chúng tôi được yêu cầu lưu giữ dữ liệu của
                Bạn để tuân thủ luật hiện hành), giải quyết tranh chấp và thực
                thi các thỏa thuận và chính sách pháp lý của Chúng tôi.
            </p>
            <p className="leading-8">
                Chúng tôi cũng sẽ giữ lại Dữ liệu sử dụng cho mục đích phân tích
                nội bộ. Dữ liệu sử dụng thường được lưu giữ trong một khoảng
                thời gian ngắn hơn, trừ khi dữ liệu này được sử dụng để tăng
                cường bảo mật hoặc để cải thiện chức năng của Trang web của
                Chúng tôi hoặc Chúng tôi có nghĩa vụ pháp lý phải lưu giữ dữ
                liệu này trong khoảng thời gian dài hơn.
            </p>
            {/* <h2 className="text-3xl font-bold my-4">
                Transfer of Your Personal Data
            </h2>
            <p className="leading-8">
                Your information, including Personal Data, is processed at the
                Company"s operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction.
            </p>
            <p className="leading-8">
                Your consent to this Chính sách Bảo mật followed by Your submission
                of such information represents Your agreement to that transfer.
            </p>
            <p className="leading-8">
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Chính sách Bảo mật and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
            </p> */}
            <h2 className="text-3xl font-bold my-4">
                Xóa Dữ liệu cá nhân của Bạn
            </h2>
            <p className="leading-8">
                Bạn có quyền xóa hoặc yêu cầu Chúng tôi hỗ trợ xóa Dữ liệu Cá
                nhân mà Chúng tôi đã thu thập về Bạn.
            </p>
            <p className="leading-8">
                Trang web của Chúng tôi có thể cung cấp cho Bạn khả năng xóa một
                số thông tin nhất định về Bạn từ trong Trang web.
            </p>
            <p className="leading-8">
                Bạn có thể cập nhật, sửa đổi hoặc xóa thông tin của mình bất kỳ
                lúc nào bằng cách đăng nhập vào Tài khoản của Bạn, nếu Bạn có và
                truy cập phần cài đặt tài khoản cho phép Bạn quản lý thông tin
                cá nhân của mình. Bạn cũng có thể liên hệ với Chúng tôi để yêu
                cầu quyền truy cập, sửa hoặc xóa bất kỳ thông tin cá nhân nào mà
                Bạn đã cung cấp cho Chúng tôi.
            </p>
            <p className="leading-8">
                Tuy nhiên, xin lưu ý rằng Chúng tôi có thể cần giữ lại một số
                thông tin nhất định khi Chúng tôi có nghĩa vụ pháp lý hoặc cơ sở
                hợp pháp để làm như vậy.
            </p>
            <h2 className="text-3xl font-bold my-4">
                Tiết lộ Dữ liệu Cá nhân của Bạn
            </h2>
            <h3 className="text-2xl font-bold my-4">Business Transactions</h3>
            <p className="leading-8">
                Nếu Chúng tôi tham gia vào việc sáp nhập, mua lại hoặc bán tài
                sản, Dữ liệu Cá nhân của Bạn có thể được chuyển giao. Chúng tôi
                sẽ cung cấp thông báo trước khi Dữ liệu Cá nhân của Bạn được
                chuyển giao và trở thành đối tượng của một Chính sách Bảo mật
                khác.
            </p>
            <h3 className="text-2xl font-bold my-4">Thực thi pháp luật</h3>
            <p className="leading-8">
                Trong một số trường hợp nhất định, Chúng tôi có thể được yêu cầu
                tiết lộ Dữ liệu Cá nhân của Bạn nếu luật pháp yêu cầu làm như
                vậy hoặc để đáp ứng các yêu cầu hợp lệ của các cơ quan công
                quyền (ví dụ: tòa án hoặc cơ quan chính phủ).
            </p>
            {/* <h3 className="text-2xl font-bold my-4">
                Other legal requirements
            </h3>
            <p className="leading-8">
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
            </p>
            <ul className="list-disc list-inside ml-4 leading-8">
                <li>Comply with a legal obligation</li>
                <li>
                    Protect and defend the rights or property of the Company
                </li>
                <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                </li>
                <li>
                    Protect the personal safety of Users of the Service or the
                    public
                </li>
                <li>Protect against legal liability</li>
            </ul> */}
            <h2 className="text-3xl font-bold my-4">
                Bảo mật Dữ liệu Cá nhân của Bạn
            </h2>
            <p className="leading-8">
                Tính bảo mật của Dữ liệu Cá nhân của Bạn rất quan trọng đối với
                Chúng tôi, nhưng hãy nhớ rằng không có phương thức truyền qua
                Internet hoặc phương thức lưu trữ điện tử nào là an toàn 100%.
                Mặc dù Chúng tôi cố gắng sử dụng các phương tiện được chấp nhận
                về mặt thương mại để bảo vệ Dữ liệu Cá nhân của Bạn, nhưng Chúng
                tôi không thể đảm bảo tính bảo mật tuyệt đối của Dữ liệu đó.
            </p>
            {/* <h1 className="text-4xl font-bold my-8">Children"s Privacy</h1>
            <p className="leading-8">
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
            </p>
            <p className="leading-8">
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your parent"s consent before We collect
                and use that information.
            </p> */}
            <h1 className="text-4xl font-bold my-8">
                Liên kết đến các trang web khác
            </h1>
            <p className="leading-8">
                Trang web của Chúng tôi có thể chứa các liên kết đến các trang
                web khác không do Chúng tôi điều hành. Nếu Bạn nhấp vào liên kết
                của bên thứ ba, Bạn sẽ được chuyển hướng đến trang web của bên
                thứ ba đó. Chúng tôi thực sự khuyên Bạn nên xem lại Chính sách
                Bảo mật của mọi trang web Bạn truy cập.
            </p>
            <p className="leading-8">
                Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung,
                chính sách bảo mật hoặc thông lệ của bất kỳ trang web hoặc dịch
                vụ của bên thứ ba nào.
            </p>
            <h1 className="text-4xl font-bold my-8">
                Những thay đổi đối với Chính sách Bảo mật này
            </h1>
            <p className="leading-8">
                Thỉnh thoảng Chúng tôi có thể cập nhật Chính sách Bảo mật của
                mình. Chúng tôi sẽ thông báo cho Bạn về bất kỳ thay đổi nào bằng
                cách đăng Chính sách Bảo mật mới trên trang này.
            </p>
            <p className="leading-8">
                Chúng tôi sẽ cho Bạn biết qua email và/hoặc thông báo nổi bật
                trên Trang web của Chúng tôi, trước khi thay đổi có hiệu lực và
                cập nhật ngày &quot;Cập nhật lần cuối&quot; ở đầu Chính sách Bảo
                mật này.
            </p>
            <p className="leading-8">
                Bạn nên xem lại Chính sách Bảo mật này định kỳ để biết bất kỳ
                thay đổi nào. Những thay đổi đối với Chính sách Bảo mật này có
                hiệu lực khi chúng được đăng trên trang này.
            </p>
            <h1 className="text-4xl font-bold my-8">Liên hệ với Chúng tôi</h1>
            <p className="leading-8">
                Nếu Bạn có bất kỳ câu hỏi nào về Chính sách Bảo mật này, Bạn có
                thể liên hệ với Chúng tôi:
            </p>
            <ul className="list-disc list-inside ml-4 leading-8">
                <li>
                    Bằng email tại địa chỉ:{' '}
                    <a
                        href="mailto:hanorder@parkltd.net"
                        className="text-indigo-600 hover:underline"
                    >
                        hanorder@parkltd.net
                    </a>
                </li>
                <li>
                    Bằng điện thoại qua số:{' '}
                    <a
                        href="tel:(+84) 93 864 28 87"
                        className="text-indigo-600 hover:underline"
                    >
                        (+84) 93 864 28 87
                    </a>
                </li>
                <li>
                    Bằng cách gửi biểu mẫu tại trang này:{' '}
                    <a
                        href="https://morningbasket.vn/contact"
                        rel="external nofollow noopener"
                        target="_blank"
                        className="text-indigo-600 hover:underline"
                    >
                        https://morningbasket.vn/contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default PrivacyPolicyPage

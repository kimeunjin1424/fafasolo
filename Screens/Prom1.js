import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'

const Prom1 = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View style={{ padding: 10 }}>
            <Text>
              이용약관{'\n'}
              {'\n'}
              제1장 총칙{'\n'}
              {'\n'}
              제1조 [목적] 이 약관은 ‘재미소프트’(이하 회사라 합니다) 회사가
              운영하는‘나혼자 솔로’ 서비스 (이하 서비스)를 이용하는 모든 이용자
              (이하 “이용자”라 합니다) 간의 서비스의 이용 및 이에 따르는 책임에
              관한 사항을 규정함을 목적으로 합니다.{'\n'}
              {'\n'} 제2조 [적용] 이 약관은 회사와 ‘나혼자 솔로’의 서비스를
              이용하고자 하는 이용자에게 적용 됩니다. {'\n'}
              {'\n'}제3조 [용어의 정의] ① 이 약관에서 사용하는 용어의 정의는
              다음과 같습니다. {'\n'}1. “회사”란 인터넷 서비스를 제공하는
              사업자를 의미합니다. {'\n'}2. “회원”이란 이 약관에 따라 이용계약을
              체결하고, 회사가 제공하는 서 비스를 이용하는 자를 의미합니다.{' '}
              {'\n'}3. “이메일(Email)”란 회원의 식별과 서비스 이용을 위하여
              회원이 정하고 사 이트가 승인하는 문자와 숫자의 조합을 말합니다.{' '}
              {'\n'}4. “비밀번호”란 회원이 부여받은 이메일(Email)과 일치된
              회원임을 확인하 고, 회원 자신의 비밀을 보호하기 위하여 회원이 정한
              문자와 숫자의 조합을 말합니다.{'\n'} 5. “유료 서비스”란 ‘나혼자
              솔로’의 서비스 중 회사가 요금을 결제한 이용 자에게 제공하는 특정
              서비스를 의미합니다. ② 이 약관에서 사용하는 용어의 정의는 본 조
              제1항에서 정하는 것을 제외 하고는 관계 법령 및 서비스별 정책에서
              정하는 바에 의하며, 이에 정하 지 아니한 것은 일반적인 상 관례에
              따릅니다.
              {'\n'}
              {'\n'}제4조 [약관 외 준칙] 이 약관에서 정하지 아니한 사항과 이
              약관의 해석에 관하여는 「전자상거 래 등에서의 소비자보호에 관한
              법률」,「약관의 규제에 관한 법률」,「정보 통신망 이용촉진 및
              정보보호 등에 관한 법률」,「콘텐츠산업진흥법」 등 관 련 법령 또는
              상 관례에 따릅니다. {'\n'}
              {'\n'}제5조 [약관의 게시와 개정]{'\n'} ① 회사는 이 약관을 회원이
              그 전부를 인쇄할 수 있고 확인할 수 있도록 기술적 조치를 취합니다.{' '}
              {'\n'}② 회사는 회원이 약관에 동의하기에 앞서 약관에 정하여져 있는
              내용 중 청약철회 등과 같은 중요한 내용을 회원이 쉽게 이해할 수
              있도록 별도 의 연결화면 또는 팝업 화면 등을 제공합니다.{'\n'} ③
              회사는 ‘콘텐츠산업진흥법’, ‘전자상거래 등에서의 소비자보호에 관한
              법률’, ‘약관의 규제에 관한 법률’ 등 관련 법령을 위배하지 않는 범
              위에서 이 약관을 개정할 수 있습니다.
              {'\n'} ④ 회사가 약관을 개정할 때는 적용 일자 및 개정 사유를
              명시하여 서비스 초기 화면에 그 개정약관의 적용 일자 7일 전부터
              적용 일자 전날까지 공지합니다. 다만, 회원에게 불리한 약관 개정의
              경우에는 30일 전부터 적용 일자 전날까지 공지하며, 공지 외에 일정
              기간 서비스 내 로그인 시 동의 창 등의 전자적 수단을 통해 따로
              명확히 통지하도록 합니다.{'\n'} ⑤ 회사가 전항에 따라 개정약관을
              공지 또는 통지하면서 회원에게 전항의 공지 기간 내에 의사표시를
              하지 않으면 의사표시가 표명된 것으로 본다 는 뜻을 명확하게 공지
              또는 통지하였음에도 회원이 명시적으로 거부의 의사표시를 하지
              아니한 경우 회원이 개정약관에 동의한 것으로 봅니다.{'\n'} ⑥ 회원이
              개정약관의 적용에 동의하지 않는 경우 회사는 개정약관의 내용 을
              적용할 수 없으며, 이 경우 회원은 이용계약을 해지할 수 있습니다.
              다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는
              회사가 이용계약을 해지할 수 있습니다.{'\n'} ⑦ 회원은 전항 단서에
              따른 이용계약의 해지로 손해가 발생한 경우 회사에 이에 대한 배상을
              청구할 수 있습니다.{'\n'} {'\n'}제6조 [회원가입]
              {'\n'} ① 회원으로 가입하여 회사 서비스의 이용을 희망하는 자는
              약관의 내용을 숙지한 후 동의함을 표시하고, 회사가 제시하는 소정의
              회원가입 양식에 관련 사항을 기재하여 회원가입을 신청하여야 합니다.
              {'\n'} ② 회사는 전항에 따라 이용자가 온라인 회원가입 신청양식에
              기재하는 모 든 회원 정보를 실제 데이터인 것으로 간주합니다.{'\n'}{' '}
              ③ 실명이나 실제 정보를 입력하지 않은 회원은 법적인 보호를 받을 수
              없 으며, 본 약관의 관련 규정에 따라 서비스 사용에 제한을 받을 수
              있습니 다. {'\n'}④ 회사는 본조 제1항에 따른 이용자의 신청에 대하여
              회원가입이 자동적으로 승인됩니다. 다만, 회사는 다음 각호에
              해당하는 사항에 대하여는, 승인 이후라도 취소할 수 있습니다. {'\n'}
              {'\n'}
              1. 거짓 정보를 입력한 경우 {'\n'}2. 실명을 사용하지 않은 경우{' '}
              {'\n'}3. 타인의 명의 또는 개인 정보를 도용하는 경우 {'\n'}4.
              상대방에게 금전적 거래를 요구하거나, 성적 수치심을 느끼는 말을 한
              경우{'\n'} 5. 중복된 아이디를 사용하는 경우 {'\n'}6. 회사가
              제시하는 회원가입 신청양식에 관련 내용을 기재하지 않은 경우
              {'\n'}7. 이전에 회사 이용약관 또는 관계 법령을 위반하여 회원자격이
              상실되었던 경우 {'\n'}8. 본 약관 제12조 [회원의 의무]를 위반하는
              경우 {'\n'}9. 기타 본 약관 및 관계 법령을 위반하는 경우 {'\n'}10.
              회원가입 신청양식에 기재되어 회사에 제공되는 개인정보(이메일,
              비밀번호, 등)가 선량한 풍속 기타 사회질서에 위배되거나 타인을
              모욕하는 경우 {'\n'}11. 한국 나이 기준 만 19세 미만의 미성년자,
              법률혼 및 사실혼 상태이거나 이에 준하는 경우{'\n'}
              {'\n'} ⑤ 회사는 서비스 관련 설비의 여유가 없거나 기술상 또는
              업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다. {'\n'}⑥
              회사가 본조 제4항과 제5항에 따라 회원가입신청의 승낙을 하지 아니하
              거나 유보한 경우에는 알림창을 통하여 즉시 이용자(신청자)에게
              알립니 다. 단, 회사의 귀책사유 없이 이용자에게 알릴 수 없는
              경우에는 예외로 합니다.
              {'\n'}
              {'\n'} 제7조 [회원 정보의 변경]{'\n'} ① 회원은 회사 웹사이트
              “정보수정” 페이지에서 언제든지 자신의 개인정 보를 열람하고 수정할
              수 있습니다. {'\n'}② 회원이 전항의 변경사항을 수정하지 않아 발생한
              불이익에 대하여 회사 는 책임지지 않습니다. {'\n'}
              {'\n'}제8조 [회원의 이메일 및 비밀번호의 관리에 대한 의무]{'\n'} ①
              회원은 아이디와 비밀번호에 대한 관리책임이 있으며, 이를 타인에게
              공 개하여 제3자가 이용하도록 하여서는 안 됩니다. {'\n'}② 회원은
              자신의 아이디 및 비밀번호가 유출되어 제3자에 의해 사용되고 있음을
              인지한 경우, 즉시 회사에 알려야 합니다.{'\n'} ③ 회사는 전항의 경우
              회원의 개인정보보호 및 기타 서비스 부정이용행위 방지 등을 위하여
              회원에게 비밀번호의 변경 등 필요한 조치를 요구할 수 있으며, 회원은
              회사의 요구가 있는 즉시 회사의 요청에 성실히 응해 야 합니다.{'\n'}{' '}
              ④ 회사는 회원이 본조 제2항 및 제3항에 따른 의무를 성실히 이행하지
              않 아 발생한 불이익에 대하여 책임지지 않습니다.{'\n'}
              {'\n'} 제9조 [회원탈퇴]{'\n'} ① 회원은 언제든지 서비스 화면 내
              ‘회원탈퇴’ 기능을 통하여 본 서비스 의 이용계약을 해지할 수
              있습니다. {'\n'}② 회원은 탈퇴하는 경우 기존에 생성하였던
              데이터들은 모두 삭제되어 다시 복구 및 이용이 절대 불가합니다. 이에
              대하여 회사가 본 사항을 안내하였음에도 불구하고 회원이 탈퇴한 경우
              회사는 이에 대한 책임을 부담하지 않습니다. {'\n'}③ 회원이 고의
              또는 과실로 서비스를 탈퇴한 이후에는 결제한 서비스의 환 불은
              불가능합니다. 이에 대하여 회사가 본 사항을 안내하였음에도 불구
              하고 회원이 탈퇴한 경우 회사는 이에 대한 책임을 부담하지 않습니다.
              {'\n'}
              {'\n'}제10조 [회원에 대한 통지] {'\n'}① 회사가 회원에 대해 통지를
              하는 경우 이 약관에 별도 규정이 없는 한 회원이 가입 시 제공한
              전자우편, 개별 서비스 내 전자 쪽지, 서비스 내 팝업 화면 등으로 할
              수 있습니다. {'\n'}② 회사는 회원 전체에 대한 통지의 경우 7일 이상
              회사의 서비스상에 게시 함으로써 본조 제1항의 통지에 갈음할 수
              있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는
              사항에 대하여는 제1항의 통지를 합니다.{'\n'} ③ 회원이
              연락처(이메일)를 정확히 기재하지 않았거나 변경이 되었음에도
              수정하지 않는 등으로 인하여 회사의 통지를 받지 못한 경우, 그에
              대한 책임은 회 원에게 있습니다. {'\n'}
              {'\n'}제11조 [회사의 의무] {'\n'}① 회사는 관련 법령 및 본 약관에
              반하는 행위를 하지 않으며, 지속적이고 안정적인 서비스를 제공하기
              위하여 최선을 다하여 노력합니다.{'\n'} ② 회사는 회원이 안전하게
              서비스를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위해 보안
              시스템을 갖추어야 하며, ‘개인정보 처리 방침’ 을 공시하고
              준수합니다. {'\n'}③ 회사는 회원으로부터 제기되는 의견이나 불만이
              객관적으로 정당하다고 인정될 경우에는 회원의 불만을 해결하기 위해
              노력합니다.{'\n'} ④ 당 사이트는 회원의 개인 신상 정보를 본의 승낙
              없이 타인에게 누설, 배 포하지 않습니다. 다만, 전기통신 관련 법령
              등 관계 법령에 따라 관계 국가기관 등의 요구가 있는 경우에는
              그러하지 아니합니다.{'\n'} {'\n'}
              제12조 [회원의 의무] {'\n'}① 회원은 본 약관의 규정, 회사의
              이용정책, 이용 안내 사항 및 관련 법령 등을 준수하여야 하며, 기타
              회사 업무에 방해되는 행위를 하여서는 안 됩니다. {'\n'}② 회원은
              회사에서 받은 모든 콘텐츠를 회사의 사전 동의 없이 복제, 판매,
              편집, 전시, 배포, 방송 등 저작권을 침해하는 일체의 행위를 해서는
              안 됩니다. {'\n'}③ 회원은 다음 각호의 행위를 하여서는 안 됩니다.
              {'\n'} 1. 가입 신청 또는 회원 정보 변경 시 허위 내용을 등록하는
              행위 {'\n'}2. 타인의 정보를 수집, 저장, 공개하거나 도용하여
              부정하게 사용하는 행위 {'\n'}3. 비정상적인 가입을 시도하거나
              서비스 제공을 방해하는 행위{'\n'} 4. 회사와 제3자의 저작권 등
              지식재산권을 침해하는 행위{'\n'} 5. 서비스의 이용 권한, 기타 이용
              계약상 지위를 회사의 이용 규칙을 위배 하여 타인에게 양도, 증여하는
              행위
              {'\n'}6. 회사의 동의 없이 영리를 목적으로 서비스를 사용하는 행위{' '}
              {'\n'}7. 회원이 서비스 내에서 외설, 폭력적인 메시지, 기타
              공서양속에 반하거나, 그와 관련된 부호·음성. 음향 및 영상 정보를
              공개 또는 게시하거나 유 포시키는 행위 {'\n'}8. 회사의 운영자,
              임직원, 회사를 사칭하거나 관련 정보를 도용하는 행위 {'\n'}9. 회사
              또는 제3자를 희롱하거나, 위협하거나 명예를 훼손시키는 행위 {'\n'}
              10. 회사에 문의 시 욕설, 폭언, 성희롱, 반복적인 민원을 통해 업무를
              방해 하는 행위{'\n'} 11. 현행 법령에 위반되는 불법적인 행위 {'\n'}
              12. 상품의 판매 또는 용역의 제공을 가장한 현금 융통 및 [정보통신망
              이용 촉진 및 정보보호 등에 관한 법률, 전자상거래 등에서의 소비자
              보호에 관한 법률 등] 법령에 위배되거나 비정상적인 결제 행위{
                '\n'
              }{' '}
              ④ 회사는 회원이 본조 제3항에서 금지한 행위를 하는 경우, 위반
              행위의 경 중에 따라 서비스 이용제한, 수사기관에의 고발 조치 등
              합당한 조처를 할 수 있습니다. {'\n'}⑤ 회원은 본 서비스를 이용하는
              모든 행위 및 그 결과에 대해 모든 책임을 집니다. 서비스 이용 시
              발생하는 분쟁에 대해 해당 회원은 자신의 책임 과 비용으로 회사를
              면책시켜야 합니다. {'\n'}⑥ 회사는 회원이 본 조에서 규정한 의무를
              위반하여 발생한 모든 문제에 대해서는 고의 또는 중대한 과실이 없는
              한 책임을 부담하지 않습니다{'\n'}
              {'\n'} 제13조 [서비스의 내용 등의 게시]
              {'\n'} ① 회사는 다음 사항을 ‘나혼자 솔로’서비스의 이용
              초기화면이나 결재화면 등에 회 원이 알기 쉽게 표시합니다.{'\n'} 1.
              ‘니혼자 솔로’유료 서비스 이용시(하트 결제)제공자의 성명(법인인
              경우에는 법인의 명칭),주소, 전화번호{'\n'} 2. ‘나혼자 솔로’ 유료
              서비스의 내용, 이용방법, 이용료, 기타 이용조건{'\n'} ② 회사의 유료
              서비스의 이용 가능 기기 및 이용에 필요한 최소한의 기술 사양은
              권장사양정보에 따릅니다.{'\n'} ③ 회사는 유료 서비스를 제공함에
              있어 유료 서비스의 교환·반품·보증과 그 대금 환불의 조건 및 절차에
              관한 사항을 제공합니다. {'\n'}
              {'\n'}제14조 [유료 서비스 계약의 성립 등]
              {'\n'} ① 회원은 회사가 제공하는 다음 또는 이와 유사한 절차에
              의하여 이용신청 을 합니다. 회사는 계약 체결 전에 각호의 사항에
              관하여 회원이 정확하 게 이해하고 실수 또는 착오 없이 거래할 수
              있도록 정보를 제공합니다. {'\n'}1. 유료 서비스의 확인 및 선택{' '}
              {'\n'}2. 결제방법의 선택 및 결제정보의 입력{'\n'} 3. 유료 서비스의
              이용신청에 관한 확인 또는 회사의 확인에 대한 {'\n'} ② 회사는
              회원의 이용신청이 다음 각호에 해당하는 경우에는 승낙하지 않 거나
              승낙을 유보할 수 있습니다.{'\n'} 1. 실명이 아니거나 타인의 명의를
              이용한 경우 {'\n'}2. 허위의 정보를 기재하거나, 회사가 제시하는
              내용을 기재하지 않은 경우 {'\n'}3. 관계 법령, 기타 규정한 제반
              사항을 위반하여 신청하는 경우 {'\n'}4. 서비스 관련 설비의 여유가
              없거나, 기술상 또는 업무상 문제가 있는 경 우{'\n'} ③ 이용계약의
              성립 시기는 서비스‘구매완료’를 신청절차 상에서 표시한 시점으로
              합니다. {'\n'}④ 회원이 유료 서비스를 이용하기 위해서는 이 약관에
              동의 후 각 서비스 에 따른 이용조건에 따라 이용요금을 지급하여야
              합니다.{'\n'}
              {'\n'}제15조 [서비스의 중단 및 변경]{'\n'} ① 회사는 사업 종목의
              전환, 사업의 포기, 업체 간의 통합 등의 이유로 서 비스를 제공할 수
              없게 되는 경우에는 이 약관에서 정한 방법으로 회원 에게 통지하고
              당초 회사에서 제시한 조건 또는 ‘콘텐츠이용자보호지 침’ 및 관련
              법령 규정에서 정한 바에 따라 회원에게 보상합니다.{'\n'} ② 회사는
              상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하 고
              있는 전부 또는 일부의 서비스를 변경할 수 있고, 변경 전 해당 서비
              스 초기화면에 관련 사항을 게시합니다. 다만, 변경된 내용이
              중대하거나 회원에게 불리한 경우에는 이 약관에서 정한 방법으로
              통지합니다.{'\n'}
              {'\n'}제16조 [회원의 결제취소]{'\n'} ① 회사와 유료 서비스
              이용계약을 체결한 회원은 관련 법령에서 정한 바에 따라 일정 기간
              내에 결제를 취소 할 수 있습니다.{'\n'} ② 회원은 다음 각호의 사유가
              있을 때 상품 구입 취소를 할 수 있습니다.{'\n'} 1. 유료 서비스
              회원이 이 약관의 개정 또는 서비스 변경에 동의하지 않아 회원탈퇴
              또는 유료 서비스 이용계약을 해지하는 경우{'\n'} ③ 회원이 전항에
              따라 상품 계약 취소 하는 경우 회사는 회원으로부터 지급받은 대금을
              당초 회사에서 정한 조건 또는 ‘콘텐츠이용자보호지침’ 및 관련 법령
              규정, 이 약관에서 정한 바에 따 라 회원에게 환불합니다.{'\n'} ④
              회사, 유료 서비스의 대금을 지급 받은 자 또는 회원과 유료 서비스
              이용 계약을 체결한 자가 동일인이 아닌 경우에 각자는 청약철회 등과
              관련한 의무의 이행에 있어서 연대하여 책임을 집니다. {'\n'}
              {'\n'}제17조 [결제취소 환불정책]{'\n'} ① 회원이 서비스를 공급받은
              날로부터 7일 이내에는 결제취소가 가능합니 다. 다만, 서비스의
              내용이 회사가 표시·광고한 내용과 다르거나 계약 내용과 다르게
              이행된 경우에는 그 서비스 등을 공급받은 날부터 3개월 이내, 그
              사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 결재철회 가
              가능합니다. {'\n'}② 회사는 회원에게 결제 취소의 의사표시에 대하여
              회신한 날로부터 3 영업일 이내에 대금의 결제와 동일한 방법으로 이를
              환불하여야 하고 동 일한 방법으로 환불이 불가능할 때에는 결제
              금액을 계좌이체등 다양한 방법으로 환불할 수 있다. 다만, 수납확인이
              필요한 결제수단의 경우에는 수납확인일로부터 3영업일 이내에 이를
              환불하도록 합니다.
              {'\n'} ③ 회사는 위 대금을 환불함에 있어서 회원이 신용카드 또는
              전자화폐 등의 결제수단으로 재화 등의 대금을 지급한 때에는 지체
              없이 당해 결제수단 을 제공한 사업자로 하여금 재화 등의 대금 청구를
              정지 또는 취소하도 록 요청합니다.{'\n'} ④ 회사는 유료 서비스에
              대해 원칙적으로 다음과 같은 환불 규정을 적용합 니다.{'\n'} 1. 7일
              이내에는 결제한 금액의 전액을 환불한다. {'\n'}2. 8일~30일 사이에
              결제한 금액의 70%를 환불한다.{'\n'} 3. 31일 이후에는 결제한 금약의
              50%를 환불한다. {'\n'}
              {'\n'}제18조 [회사의 계약해제, 해지 및 이용제한]
              {'\n'} ① 회사는 회원이 이용약관에서 정한 금지행위를 하였을 경우
              해당 조항에 따라 사전통지 없이 계약을 해제, 해지하거나 또는 기간을
              정하여 서비스 이용을 제한할 수 있습니다.{'\n'} ② 본조 제1항의
              해제, 해지는 회사가 정한 통지방법에 따라 회원에게 그 의 사를
              표시한 때에 효력이 발생합니다.
              {'\n'}③ 회사의 해제, 해지 및 이용제한에 대하여 회원은 회사가 정한
              절차에 따 라 이의신청을 할 수 있습니다. 이때 이의가 정당하다고
              회사가 인정하는 경우, 회사는 즉시 서비스의 이용을 재개합니다.
              {'\n'} ④ 회사가 본조 제1항에 따라 회원의 유료 서비스 이용을
              제한하거나 본 계 약을 해제, 해지하는 경우 회사는 회원에게 환불을
              하지 않습니다.{'\n'} {'\n'}제19조 [대금의 지급 및 과오금]{'\n'} ①
              회사는 과오금이 발생한 경우 회원이 결제한 수단과 동일한 수단으로
              과 오금 전액을 환불하여야 합니다. 다만, 동일한 방법으로 환불이
              불가능할 때는 회원에게 사전 고지한 후 계좌 이체 혹은 환불적립금을
              적립하는 방법으로 환불 조치할 수 있습니다.{'\n'} ② 회사의 책임
              있는 사유로 과오금이 발생한 경우 회사는 계약 비용, 수수 료 등과
              관계없이 과오금 전액을 환불합니다. 다만, 회원의 책임 있는 사 유로
              과오금이 발생한 경우, 회사가 과오금을 환불하는데 소요되는 수수
              료는 회원이 부담하여야 합니다.{'\n'} ③ 회사는 회원의 과오금 환급
              청구를 거절할 경우 과오금이 없음을 입증하 여야 합니다. {'\n'}④
              회사는 다음 각호에 따라 과오금을 반환합니다. {'\n'}1. 회사나
              회원이 과오금의 발생 사실을 안 때에는 전자우편, 서비스 홈페이 지
              등 회사가 제시한 방법에 따라 상대방에게 통보합니다. {'\n'}2.
              회사는 회원에게 환불에 필요한 정보(회원 성명, 결제증빙서류,
              전화번호, 환불 요청 계좌 등)를 요청할 수 있습니다.{'\n'} 3. 회원은
              환불에 필요한 본조 제2호의 정보를 회사에 제공해야 합니다. {'\n'}4.
              회사는 회원의 정보 제공일로부터 7일 이내 환불 처리를 합니다. 단,
              회원 의 명시적 의사표시가 있는 경우 차 회 요금에서 상계할 수
              있습니다.{'\n'} ⑤ 과오금의 세부 환불 절차 및 기타 사항은
              콘텐츠이용자 보호 지침이 정 하는 바에 따릅니다. {'\n'}
              {'\n'}제20조 [서비스하자 등에 의한 회원피해보상]{'\n'} 회사는
              서비스의 하자 등에 의한 회원의 피해보상 기준, 범위, 방법 및 절차
              에 관한 사항을 ‘콘텐츠이용자 보호 지침’에 따라 처리합니다. {'\n'}
              제4장 기타 제21조 [책임 제한]{'\n'} ① 회사는 관계 법령의 변경,
              천재지변 또는 이에 준하는 불가항력으로 인하 여 서비스를 제공할 수
              없는 경우에는 서비스 제공에 관한 책임이 면제 됩니다.{'\n'} ②
              회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 회사의
              귀책사유가 없는 한 책임을 지지 않습니다.
              {'\n'} ③ 회사는 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의
              신뢰도, 정 확성 등의 내용에 관하여는 책임을 지지 않습니다. {'\n'}④
              회사는 회원 상호 간 또는 회원과 제삼자 간에 서비스를 매개로 하여
              발 생한 분쟁 등에 대하여 회사의 귀책사유가 없는 한 책임을 지지
              않습니 다.{'\n'}
              {'\n'} 제22조 [개인정보보호] {'\n'}① 회사는 회원의 개인정보보호를
              중요시하며, 회원이 회사의 서비스를 이용 함과 동시에 온라인상에서
              회사에 제공한 개인정보의 철저한 보호를 위 하여 최선을 다하고
              있습니다.{'\n'} ② 개인정보보호와 관련된 자세한 사항은 앱 회원가입
              진행시 전자적 표시형 태로 제공되는 개인정보처리방침에서 확인한 후
              회원가입을 마무리 할 수 있습니다. {'\n'}제23조 [분쟁의 해결 등]{' '}
              {'\n'}① 회사와 이용자 간의 콘텐츠 거래 또는 이용에 관한 분쟁은
              콘텐츠분쟁조 정위원회를 통해 조정할 수 있습니다. {'\n'}② 회사와
              이용자 간에 소송이 제기되면 민사소송법상의 관할법원을 전속적
              관할법원으로 합니다. {'\n'}[부칙] 본 약관은 2024년 7월 15일 자부터
              시행됩니다.
            </Text>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 15,
              padding: 10,
              marginHorizontal: 10,
              backgroundColor: 'lightgray',
            }}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Text style={{ textAlign: 'center' }}>내용을 확인했습니다.</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Prom1

const styles = StyleSheet.create({})

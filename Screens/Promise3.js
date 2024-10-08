import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'

const Promise3 = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View style={{ padding: 10 }}>
            <Text>
              {'\n'}개인 위치정보 처리방침 재미소프트는(이하 “회사” 라 함)는
              개인정보 보호법, 위치정보의 보호 및 이용 등에 관한 법률(이하
              “위치정보법”이라 함) 등 위치기반 서비스 사업자가 준수하여야 할
              대한민국의 관계 법령상의 개인 위치정보보호 규정을 준수하며,
              위치정보법 제21조의2 및 개인정보 보호법 제30조 등 관련 법령에
              의거한 개인 위치정보 처리방침을 정하여 이용자 권익 보호에 최선을
              다하고 있습니다. 회사의 개인 위치정보 처리방침(이하 “처리방침”이라
              함)은 다음과 같은 내용을 담고 있습니다.{'\n'}
              {'\n'} 1.정의 {'\n'}① 본 처리방침에서 사용하는 용어의 정의는
              다음과 같습니다.{'\n'} 1. “위치정보”라 함은 이동성이 있는 물건
              또는 개인이 특정한 시간에 존재하거나 존재하였던 장소에 관한
              정보로서 「전기통신사업법」 제2조제2호 및 제3호에 따른
              전기통신설비 및 전기통신회선설비를 이용하여 측위(測位)된 것을
              말합니다. {'\n'}2. “개인 위치정보”라 함은 특정 개인의
              위치정보(위치정보만으로는 특정 개인의 위치를 알 수 없는 경우에도
              다른 정보와 용이하게 결합하여 특정 개인의 위치를 알수 있는 것을
              포함한다)를 말합니다.{'\n'} 3. “개인 위치정보 주체”라 함은
              개인위치정보에 의하여 식별되는 자를 말합니다. {'\n'}4. “위치정보
              수집사실 확인자료”라 함은 위치정보의 수집요청인, 수집일시 및 수
              집방법에 관한 자료(위치정보는 제외한다)를 말합니다.{'\n'} 5.
              “위치정보 이용ㆍ제공사실 확인자료”라 함은 위치정보를 제공받는 자,
              취득경로, 이용ㆍ제공일시 및 이용ㆍ제공방법에 관한 자료(위치정보는
              제외한다)를 말합니다.{'\n'} 6. “위치정보사업”이라 함은 위치정보를
              수집하여 위치기반 서비스 사업을 하는 자에게 제공하는 것을 사업으로
              영위하는 것을 말합니다.{'\n'} 7. “위치기반서비스사업”이라 함은
              위치정보를 이용한 서비스를 제공하는 것을 사업으로 영위하는 것을
              말합니다. {'\n'}8. “위치정보시스템”이라 함은 위치정보사업 및
              위치기반서비스사업을 위하여 「정보통신망 이용촉진 및 정보보호 등에
              관한 법률」 제2조제1항제1호에 따른 정보통신망을 통하여 위치정보를
              수집ㆍ저장ㆍ분석ㆍ이용 및 제공할 수 있도록 서로 유기적으로 연계된
              컴퓨터의 하드웨어, 소프트웨어, 데이터베이스 및 인적자원의 결합체를
              말합니다. {'\n'}② 본 조에서 정의되지 않은 용어는 관계 법령 및 일반
              상관례에 따릅니다. {'\n'}
              {'\n'}2. 개인 위치정보의 처리 목적 및 보유기간 {'\n'}① 회사는 다음
              각호의 목적을 포함하여 회사 이용약관에서 정한 제공목적 범위 내에서
              이용자의 개인 위치정보를 수집, 이용 및 제공합니다.{'\n'} 1. 회사가
              소유한 어플리케이션 및 이와 관련하여 제공하는 서비스(이하 “본
              서비스”라 함)의 컨텐츠와 본 서비스 자체의 품질의 향상 {'\n'}2.
              회사의 새로운 서비스 안내 {'\n'}3. 고충 처리 민원인의 신원 확인,
              민원사항 확인, 사실조사를 위한 연락. 통지, 처리결과 통보 등의 목적
              {'\n'}4. 기타 회원이 동의한 범위 내의 이용{'\n'} ② 회사는 본 조에
              따라 개인 위치정보를 수집하는 경우, 수집목적을 달성하기 위하여
              필요한 최소한의 정보를 수집합니다.{'\n'} ③ 회사는 본 개인 위치정보
              처리방침에 따라 수집한 개인 위치정보를 최대 1년간 보관합니다.{' '}
              {'\n'}④ 회사가 본 조에 따라 수집한 개인 위치정보는 본 조에 따른
              목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는
              경우에는 개인정보 보호법 제18조 및 위치정보법 제18조에 따라 별도의
              동의를 받는 등 필요한 조치를 이행할 예정입니다. {'\n'}
              {'\n'}3. 이용·제공 확인자료의 보유근거 및 보유기간 {'\n'}① 회사는
              위치정보법 제16조 제2항에 따라 개인 위치정보 이용, 제공사실
              확인자료를 자동으로 기록, 보존합니다.{'\n'} ② 회사는
              개인위치정보의 수집, 이용, 제공사실 확인자료를 이용자의 요구 또는
              적법한 절차에 의거한 관계기간의 자료 제시 요구에 대비하기 위하여
              또는 기타 법령에 의하여 보존할 필요성이 있는 경우 최소 1년간
              보유할 수 있습니다.{'\n'}
              {'\n'} 4. 개인 위치정보의 파기 절차 및 방법{'\n'} ① 회사는
              회원탈퇴 등 본 처리방침에서 정한 목적이 달성되거나 보유기간이
              경과하면 본 처리방침에 따라 수집한 개인 위치정보를 복구 및 재생이
              불가능하도록 지체없이 파기합니다. {'\n'} 전 항에 따른 개인
              위치정보는 전자적 파일 형태의 경우, 복구 및 재생되지 않도록
              안전하게 삭제하고, 그 밖에 기록물, 인쇄물, 서면 등의 경우
              분쇄하거나 소각하여 파기합니다. {'\n'}③ 개인 위치정보 주체로부터
              동의받은 개인 위치정보 보유기간이 경과하거나 처리 목적이
              달성되었음에도 불구하고 다른 법령에 따라 개인 위치정보를 계속
              보존하여야 하는 경우에는, 해당 개인 위치정보를 별도의
              데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.{'\n'}
              {'\n'} 5. 개인 위치정보의 제3자 제공 {'\n'}① 회사는 개인 위치정보
              주체의 사전 동의 없이 위치정보를 외부에 제공하지 않습니다. 단,
              다음 각호의 경우에는 필요 최소한의 범위에서 외부에 제공할 수
              있습니다.{'\n'} 1. 개인 위치정보 주체가 직접 동의를 한 경우{'\n'}{' '}
              2. 관련 법령에 의거해 제출 의무가 발생한 경우 {'\n'}3. 개인
              위치정보 주체 또는 법정대리인이 의사표시를 할 수 없는 상태에
              있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히
              개인 위치정보 주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을
              위 하여 필요하다고 인정되는 경우 {'\n'}4. 통계작성 및 학술연구
              등의 목적을 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는
              형태로 개인 위치정보를 제공하는 경우 {'\n'}5. 범죄의 수사와 공소의
              제기 및 유지를 위하여 필요한 경우 {'\n'}6. 법원의 재판업무 수행을
              위하여 필요한 경우 {'\n'}7. 형 및 감호, 보호처분의 집행을 위하여
              필요한 경우 {'\n'}② 개인 위치정보 주체는 개인정보 보호법 등
              관계법령을 위반하여 회사가 처리하고 있는 정보주체 본인이나 타인의
              개인 위치정보 및 사생활을 침해하여서는 아니 됩니다. {'\n'}
              {'\n'}6. 제3자 제공시 통보에 관한 사항 회사는 개인 위치정보를
              이용자가 지정하는 제3자에게 제공하는 경우, 개인 위치정보를 수집한
              통신단말장치로 매회 이용자에게 제공받는 자, 제공일시 및 제공목적을
              즉시 통지합니다. 단, 아래의 경우 이용자가 미리 특정하여 지정한
              통신단말장치 또는 전자우편주소, 온라인게시 등으로 통지합니다.
              {'\n'} 1. 개인 위치정보를 수집한 당해 통신단말장치가 문자, 음성
              또는 영상의 수신기능을 갖추지 아니한 경우 {'\n'}2. 이용자의 개인
              위치정보를 수집한 통신단말장치 외의 통신단말장치 또는
              전자우편주소, 온라인게시 등의 방법으로 통보할 것을 미리 요청한
              경우{'\n'}
              {'\n'} 7. 개인 위치정보 처리의 위탁 개인 위치정보 처리를 위탁하는
              경우 관련 사항은 관련 홈페이지에 게재하여 정보 주체가 확인할 수
              있도록 안내하고 있으며, 회사는 별도의 위탁 사항이 없음을
              알려드립니다. {'\n'}
              {'\n'}8. 개인 위치정보 주체의 권리 및 행사방법 ① 이용자는 회사에
              대해 언제든지 다음 각호의 개인 위치정보 보호 관련 권리를 행사할 수
              있습니다. {'\n'}1. 개인 위치정보 열람요구 {'\n'}2. 오류 등이 있을
              경우 정정 요구{'\n'} 3. 삭제요구 {'\n'}4. 처리정지 요구{'\n'} ②
              이용자는 회사에 대하여 언제든지 개인 위치정보를 이용한 위치기반
              서비스 제공 및 개인 위치정보의 제3자 제공에 대한 동의의 전부 또는
              일부를 철회할 수 있습니다. 이 경우 회사는 수집한 개인 위치정보 및
              위치정보 이용, 제공사실 확인자료를 파기합니다.{'\n'} ③ 이용자는
              회사에 대하여 언제든지 개인 위치정보의 수집, 이용 또는 제공의
              일시적인 중지를 요구할 수 있습니다. {'\n'}④ 이용자는 회사에 대하여
              아래 각호의 자료에 대한 열람 또는 고지를 요구할 수 있고, 해당
              자료에 오류가 있는 경우에는 그 정정을 요구할 수 있습니다.{'\n'} 1.
              이용자 본인에 대한 위치정보 수집, 이용, 제공사실 확인자료{'\n'} 2.
              이용자 본인의 개인 위치정보가 위치정보법 또는 다른 법률 규정에
              의하여 제3자에게 제공된 이유 및 내용 ⑤ 본 조에 따른 권리 행사는
              회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실
              수 있으며 회사는 이에 대해 지체 없이 조치합니다. {'\n'}⑥ 이용자가
              개인 위치정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는
              회사는 정정 또는 삭제를 완료할 때까지 당해 개인 위치정보를
              이용하거나 제공하지 않습니다.{'\n'} ⑦ 본 조에 따른 권리 행사는
              이용자의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수
              있습니다. 이 경우 개인정보 보호법에 따른 위임장을 제출하셔야
              합니다.{'\n'}
              {'\n'} 9. 보호 의무자의 권리, 의무 등{'\n'} ① 회사는 아래의 경우에
              해당하는 자(이하 “8세 이하의 아동 등”)의 위치정보법 제26조 제2항에
              해당하는 자(이하 “보호의무자”)가 8세 이하의 아동 등의 생명 또는
              신체보호를 위하여 개인 위치정보의 이용 또는 제공에 동의하는
              경우에는 본인의 동의가 있는 것으로 봅니다. {'\n'}1. 8세 이하의
              아동 {'\n'}2. 피성년후견인 {'\n'}3. 장애인복지법 제2조 제2항
              제2호에 따른 정신적 장애를 가진 사람으로서 장애인고용촉진 및
              직업재활법 제2조 제2호에 따른 중증장애인에 해당하는
              사람(장애인복지법 제32조에 따라 장애인 등록을 한 사람만 해당)
              {'\n'} ② 8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여
              개인위치정보의 이용 또는 제공에 동의를 하고자 하는 보호의무자는
              서면동의서에 보호의무자임을 증명하는 서면을 첨부하여 회사에
              제출하여야 하며, 보호의무자는 8세 이하의 아동 등의 개인 위치정보
              이용 또는 제공에 동의하는 경우 위치 서비스 약관상 이용자의 권리를
              모두 가집니다. {'\n'}
              {'\n'}10. 개인 위치정보의 안전성 확보조치 회사는 개인위치정보의
              안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다. {'\n'}1.
              내부관리계획의 수립 및 시행 : 회사는 「개인 위치정보보호
              내부관리계획」을 수립하여 시행하고 있습니다. {'\n'}2. 해킹 등에
              대비한 기술적 대책 : 해킹이나 컴퓨터 바이러스 등에 의한 개인
              위치정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고
              주기적인 갱신·점검을 하며, 외부로부터 접근이 통제된 구역에
              시스템을 설치하고 기술적·물리적으로 감시 및 차단하고 있습니다.{' '}
              {'\n'}3. 개인 위치정보 처리 시스템 접근제한 : 개인위치정보를
              처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를
              통하여 개인위치정보에 대한 접근통제를 하고 있으며 침입차단시스템을
              이용하여 외부로부터의 무단접근을 통제하고 있습니다. {'\n'}4.
              접속기록의 보관 및 위·변조 방지 : 개인 위치정보 처리시스템에
              접속한 기록(웹 로그, 요약정보 등)을 최소 6개월 이상 보관, 관리하고
              있으며, 접속 기록이 위·변조 및 도난, 분실되지 않도록 관리하고
              있습니다. {'\n'}5. 비인가자에 대한 출입 통제 : 개인위치정보를
              보관하고 있는 개인 위치정보 처리 시스템의 물리적 보관 장소를
              별도로 두고 이에 대해 출입통제 절차를 수립·운영하고 있습니다.{' '}
              {'\n'}
              {'\n'}11. 개인 위치정보 관리·보호 책임자{'\n'} ① 회사는 개인
              위치정보를 적절히 관리·보호하고, 이용자의 불만, 요청 등을 원활하게
              처리할 수 있도록 개인 위치정보 관리·보호 책임자를 지정하여
              운영하고 있습니다. 개인 위치정보 관리·보호 책임자의 성명과
              연락처는 아래와 같습니다. 개인 위치정보 관리책임자 이름 : 김은숙
              이메일 : jinyinshu@nate.com{'\n'} ② 개인 위치정보 보호 책임자는
              아래와 같은 업무가 부여되고 이를 수행합니다.{'\n'} 1. 개인
              위치정보 보호 계획의 수립 및 시행 {'\n'}2. 개인 위치정보 처리 실태
              및 관행의 정기적인 조사 및 개선 {'\n'}3. 개인 위치정보 유출 및
              오용∙남용 방지를 위한 내부통제시스템의 구축{'\n'} 4. 개인 위치정보
              보호 교육 계획의 수립 및 시행{'\n'} 5. 개인 위치정보 파일/DB의
              보호 및 관리∙감독 {'\n'}6. 개인 위치정보 처리방침의 수립∙변경 및
              시행 {'\n'}7. 개인 위치정보 보호 관련 자료의 관리{'\n'} 8. 처리
              목적이 달성되거나 보유기간이 지난 개인 위치정보의 파기{'\n'} ③
              개인 위치정보 관리·보호 책임자는 개인위치 정보 처리자를 임명할 수
              있고, 개인 위치정보 처리자는 개인 위치정보 관리·보호 책임자의 지휘
              및 감독을 받아 개인 위치정보를 처리하는 업무를 담당합니다.{'\n'}
              {'\n'} 12. 개인 위치정보 관리·보호 책임자 및 위치정보 취급자의
              의무와 책임 {'\n'}① 회사는 본 처리방침에 따라 수집한 개인
              위치정보를 취급할 수 있는 자를 다음 각호의 1에 해당하는 자로
              정하여 최소한으로 제한하고 있습니다.{'\n'} 1. 기타 개인 위치정보
              관리 책임자 등 위치정보 관리업무를 수행하는 자{'\n'}2. 기타 업무상
              위치정보의 취급이 불가피한 자{'\n'} ② 회사는 다음 각호를 포함하는
              개인 위치정보의 취급과 관리에 필요한 절차를 포함하는 지침을 통하여
              위치정보 취급자로 하여금 이를 숙지하고 준수하도록 하고 있습니다.{' '}
              {'\n'}1. 개인 위치정보의 이용·제공 사실 확인자료의 열람·정정 요구
              등 개인 위치정보와 관련한 개인 위치정보 주체의 요구 및 이의·불만
              대응에 관한 사항{'\n'} 2. 개인 위치정보 관리 책임자 지정 등의
              위치정보보호 조직의 구성·운영에 관한 사항 {'\n'}3. 개인 위치정보
              취급자의 정기적인 교육에 관한 사항 {'\n'}4. 기타 위치정보의 안전한
              취급과 관리를 위해 필요한 사항 {'\n'}
              {'\n'}13. 개인 위치정보의 취급·관리의 절차에 관한 사항 회사는
              다음과 같이 위치정보의 취급·관리의 절차를 이행하고 있습니다.{'\n'}{' '}
              1. 개인 위치정보 관리 책임자의 지정{'\n'} 2. 개인 위치정보의
              이용·제공·파기 등 각 단계별 접근 권한자 지정 및 권한의 제한 {'\n'}
              3. 개인 위치정보 취급자의 의무와 책임을 규정한 취급·관리 절차 및
              지침 마련 {'\n'}4. 개인 위치정보 제공사실 등을 기록한 취급 대장의
              운영·관리 {'\n'}
              {'\n'}14. 개인 위치정보 침해사고 등이 발생한 경우의 대응방법 및
              절차{'\n'} ① 회사는 위치정보 침해사고 발생 시 신속한 대응을 통한
              피해 발생을 최소화하기 위해 다음과 같은 절차를 마련하고 있습니다.
              {'\n'} 1. 개인 위치정보 유출사실을 CEO에게 신속하게 보고하고
              새로운 상황이 발생될 때마다 수시로 대응하기 위한 대응팀을
              운영합니다.{'\n'} 2. 위치정보 유출 원인을 파악한 후, 피해 최소화
              등을 위해 취약점 제거 등 유출 원인을 제거하는 긴급 대응 조치를
              실시하도록합니다.{'\n'} 3. 개인 위치정보 주체에게 유출 사실을
              통지하고 개인정보보호위원회 또는 한국인터넷진흥원에 유출 사실을
              신고합니다.{'\n'} 4. 개인 위치정보의 유출로 인한 정보 주체
              피해구제등 지원 방안을 마련하고 유사 사고의 재발방지를 위해 대책을
              수립·시행합니다.{'\n'}
              {'\n'} 15. 권익침해 구제방법{'\n'} ① 개인 위치정보 주체는 회사의
              서비스를 이용하며 발생하는 모든 개인 위치정보보호 관련 민원을 개인
              위치정보 관리 책임자 혹은 담당부서로 신고하실 수 있습니다.{'\n'} ②
              기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래
              기관에 문의하시기 바랍니다. {'\n'}1. 개인정보침해신고센터
              (privacy.kisa.or.kr / 국번없이 118) {'\n'}2. 대검찰청 사이버수사과
              (www.spo.go.kr / 국번없이 1301){'\n'}3. 경찰청 사이버안전국
              (cyberbureau.police.go.kr / 국번없이 182) {'\n'}4.
              경찰청사이버테러대응센터 (www.netan.go.kr / 1566-0112) 시행일자 :
              2024년 7월 01일
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

export default Promise3

const styles = StyleSheet.create({})
